# 인천공항 오늘 운항표

인천공항의 도착, 출발 운항표를 오늘 현재 시간 기준으로 나타내고 공항 리뷰를 남기는 웹 서비스입니다.

- 배포 : [링크](http://54.180.51.230:8000/)

- 개발인원 : 1명

- 개발기간 : 5/29 ~

<img width="761" alt="인천공항 운항정보" src="https://user-images.githubusercontent.com/41728258/174476520-ff830820-bfb6-49e3-a114-6b877a3fb857.png">

<br/>

> ## 기술 스택

### \[Frontend\]

- React, TypeScript, scss
- recoil
- react-query

### \[Backend\]

- Express
- MongoDB

<br/>

> ## 기능

- 인천 공항의 오늘 도착, 출발 운항표

  - 같은 목적지(도착지)끼리 묶어서 표시
  - 현재시각 표시, 새로고침
  - 운항 상세정보(공항 페이지로 이동 가능)

<br/>

- 공항 검색(인천공항에서 운행중인 공항만 검색 가능)
  - 조건(ko, en, iata)에 따라 검색
  - 시간별 날씨(3h)
  - 리뷰 남기기
  - 좋아요 버튼

<br/>

> ## KeyPoint

### 1. 깔끔하고 가독성 높은 코드

이 프로젝트를 개발할 때 제일 염두에 둔 게 가독성입니다. 가독성을 좋게 하기 위해 아래와 같은 방법을 사용했습니다.

- **Semantic Tag 사용**
- **비동기 처리 시 로딩, 성공, 실패 각각 처리**

  비동기 처리 시 발생하는 로딩, 성공, 실패를 비즈니스 로직이 있는 한 컴포넌트에 처리하지 않고 로딩은 React의 **Suspense**가 처리하고 실패는 react-error-boundary 라이브러리의 **ErrorBoundary**가 처리합니다. 비즈니스 로직이 있는 컴포넌트는 **성공한 결과에만 집중**하여 복잡도를 줄였습니다.

- **컴포넌트 분리**

  컴포넌트에서 상태 관리하는 부분과 return하는 부분이 길어지면 따로 분리하여 컴포넌트나 커스텀 훅으로 만들었습니다. 분리하니 자동으로 재사용 할 수 있는 컴포넌트가 몇몇 눈에 보여 **재사용성**을 고려하여 컴포넌트를 만들었습니다.(ex. FlightTemplate, List의 item 컴포넌트, AsyncBoundary 등)

- **기타**
  - import 순서를 매겼습니다. import가 6줄이상 되면 한 줄 띄어서 구분했습니다.
    (순서 : package / assets, scss / utils, type, api / hooks, component)
  - 관련있는 컴포넌트끼리 한 폴더에 집약했습니다. 주로 pages 폴더에 집약하고 components 폴더는 pages 폴더에 사용중인 컴포넌트에 공통적으로 사용하고 사용 가능성이 있는 컴포넌트를 모았습니다. 집약한 이유는 찾기 쉽기 때문입니다.

<br />

### 2. 빠른 반응성을 위해 Optimistic Update 구현

Optimistic Update는 사용자가 액션을 발생하면 성공할 것이라고 가정하고 UI를 먼저 변화시키는 것을 말합니다. 사용자에게 **빠른 반응성을 제공**해서 사용성을 높이는 방법입니다. React Query의 mutation을 이용해서 구현했습니다. 물론, 실패했을 때 대비하여 이전 상태로 돌아가는 것도 구현되어 있습니다. hooks 폴더에서 useIncLikeMutation 파일에 구현되어 있습니다.

### 3. 원하는 API 만들기

제가 원하는 공항 정보 API가 없어서 Express, MongoDB를 이용해서 서버를 구축했습니다. Express를 선택한 이유는 많이 사용하는 프레임워크라서 레퍼런스가 많아 빠르게 구축할 수 있기 때문입니다. 그리고 MongoDB를 선택한 이유는 mongoose 라이브러리를 이용하여 MongoDB를 객체로 사용하게 해줘서 DB를 쉽게 다룰 수 있기 때문입니다. 공항 정보 API뿐만 아니라 리뷰 API도 구현했습니다.

공항 상세 정보를 나타내기 위해 공항 정보 DB와 리뷰 DB가 필요했습니다. 공항 정보 API와 리뷰 API를 각각 호출하는 것은 리소스 낭비라서 SQL의 join 개념을 사용해야 했습니다. 그래서 NoSQL인 MongoDB에서 `aggregate`의 `$lookup`을 이용해 join처럼 사용할 수 있었습니다.

```ts
...

 const result = await Airport.aggregate([
      { $match: matchObj },
      {
        // join commentsDB
        $lookup: {
          from: 'comments',
          localField: '_id',
          foreignField: 'airportId',
          as: 'comments',
        },
      },
      {
        $project: {
          iata: 1,
          name: 1,
          nameKo: 1,
          countryNameKo: 1,
          cityName: 1,
          cityNameKo: 1,
          likeCount: 1,
          commentCount: { $size: '$comments' },
        },
      },
    ])

...
```

> ## 프로젝트 진행 시 했던 고민과 어려운 점

- 개발 아이템 선정

- 어떤 상태관리 라이브러리를 사용할까?
- 운항 정보에서 어떻게 같은 목적지(도착지)끼리 묶어서 표현할까?
- useOnClickOutside 문제점
- 공항 상세 정보를 라우터 params로 이용해 API로 호출할까? 데이터를 props를 넘겨줄까?

- 배포 시 몽고 DB 해킹 사태

AWS EC2에서 이 프로젝트를 배포하고 있었습니다. 어느 순간 페이지 중 하나가 데이터를 불러오지 않아 DB를 확인하니 해킹을 당했습니다. 27017 포트에 모든 ip를 허용하고 계정 인증을 하지 않았서 누구나 DB에 접근 가능해서 이런 사태가 일어난 것 입니다. 그래서 몽고 DB 계정 인증을 설정하고 재실행해서 보안에 신경을 썼습니다. 자세한 내용은 [몽고 DB 해킹 방지하기](https://velog.io/@imconfi11/%EB%AA%BD%EA%B3%A0-DB-%ED%95%B4%ED%82%B9-%EB%B0%A9%EC%A7%80%ED%95%98%EA%B8%B0)에 정리했습니다.
