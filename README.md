# 인천공항 오늘 운항표

인천공항의 도착, 출발 운항표를 오늘 현재 시간 기준으로 나타내고 공항 리뷰를 남기는 웹 서비스입니다.

- 배포 : [링크](http://54.180.51.230:8000/)

<img width="920" alt="인천공항 운항" src="https://user-images.githubusercontent.com/41728258/175499358-e2f760c2-c55a-4db7-9a43-35dd6b93e9d7.png">

- 개발인원 : 1명

- 개발기간 : 5/29 ~

<br/>

> ## 기술 스택

### \[Frontend\]

- React, TypeScript, SCSS
- Recoil, React-Query

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

### 3. API 구현

원하는 공항 정보 API가 없어서 Express, MongoDB를 이용해서 서버를 구축했습니다. Express를 선택한 이유는 사용자가 많은 프레임워크라, 레퍼런스가 많아 빠르게 구축할 수 있기 때문입니다. 그리고 MongoDB를 선택한 이유는 mongoose 라이브러리를 이용하여 MongoDB를 객체로 사용하게 해줘서 DB를 쉽게 다룰 수 있기 때문입니다.

공항 정보 API를 구현할 때 공항 정보 DB와 리뷰 DB가 필요했습니다. 공항 정보 API와 리뷰 API를 각각 호출하는 것은 리소스 낭비라서 SQL의 join 개념을 사용해야 했습니다. 그래서 NoSQL인 MongoDB에서 `aggregate`의 `$lookup`을 이용해 join처럼 사용할 수 있었습니다.

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

공항 정보 API를 구현하기 위해 DB에 필요한 데이터가 있어야 합니다. 그 필요한 데이터는 두 개의 JSON 데이터를 합쳐서 만들었습니다. 그 과정은 [두 개의 JSON 데이터 join 하기](https://velog.io/@imconfi11/JSON-%EB%8D%B0%EC%9D%B4%ED%84%B0-join-%ED%95%98%EA%B8%B0)를 참고하시면 됩니다.

> ## 프로젝트 진행 시 했던 고민과 어려운 점

- 어떤 상태관리 라이브러리를 사용할까?

  redux, redux-saga와 recoil, react-query 두 가지 중 어느 것을 선택할 지 고민했습니다. redux, redux-saga는 간단한 작업이라도 기본적으로 구성해야할 코드가 많습니다. 액션 타입, 액션 생성함수, 리듀서를 모아놓은 Ducks 구조의 파일과 비동기 작업을 위한 saga파일들로 인해 복잡하고 관리해야 할 포인트가 많습니다. 그래서 서버의 데이터를 쉽게 동기화 해주는 react-query와 쉽게 클라이언트 상태를 관리할 수 있는 recoil를 사용했습니다. react-query를 사용하면 캐싱 처리와 비동기 처리를 간단히 할 수 있습니다. **이 프로젝트는 서버 데이터를 주로 사용하고 전역 상태로 관리해주어야 하는 데이터가 많지 않아서 recoil, react-query를 선택했습니다.**

- useOnClickOutside 문제점

  리액트에서 유용한 커스텀 훅인 useOnClickOuside이 있습니다. 지정한 노드 객체 이외의 이벤트를 감지할 수 있는 훅입니다. 구글링했을 때 검색되는 이 훅의 코드를 보면 거의 mousedown 이벤트로 걸려 있습니다. 왜 click 이벤트가 아닌 mousedown 이벤트를 사용했는 지, click 이벤트를 사용했을 때 발생하는 문제점이 있는 지 그리고 그 문제점을 해결방안은 무엇인지 (useOnClickOutside에서 왜 mousedown 이벤트를 사용했을까?)[https://velog.io/@imconfi11/%EC%99%9C-useOnClickOutside%EC%97%90%EC%84%9C-mousedown-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%96%88%EC%9D%84%EA%B9%8C]에 정리했습니다.

- 오늘 운항 시간표에서 어떻게 같은 목적지(도착지)끼리 묶어서 표현할까?

  운항 정보 API를 통해 응답받은 데이터는 아래와 같습니다.

  ```js
  [
    {airport:'신 울란바트로', airline:'몽골항공', codeshare:'Master' ...},
    {airport:'신 울란바트로', airline:'대한항공', codeshare:'Slave' ...},
    {airport:'자카르타/수카르노하타', airline:'델타항공', codeshare:'Master' ...},
    {airport:'로스앤젤레스', airline:'대한항공', codeshare:'Master' ...},
    {airport:'로스앤젤레스', airline:'란항공', codeshare:'Slave' ...},
    {airport:'로스앤젤레스', airline:'아에로멕시코', codeshare:'Slave' ...},
    ...
  ]
  ```

  같은 목적지끼리 묶을 수 있는 속성 `codeshare`가 주어졌습니다. Master-Slave로 묶어보겠습니다.

  ```js
  const result = dataList
    .reduce((acc: IFlightItem[][], cur) => {
      if (cur.codeshare === "Slave") {
        const { length } = acc;
        acc[length - 1].push(cur);
        return acc;
      }

      return [...acc, [cur]];
    }, [])
    .map((item) => (item.length === 1 ? item[0] : item));
  ```

  reduce, map 두 가지 과정을 거쳤습니다. reduce에서는 codeshare가 Master이면 현재 값을 배열에 넣고 Slave이면 이전 과정에서 만든 배열에 push합니다. 2차원 배열이 만들어집니다. 그 2차원 배열은 map에서는 원소의 길이가 1이면 객체로 나타내고 아니면 그대로 배열형태로 나타냅니다. 최종적으로 묶을 수 있는 데이터면 배열로 나타내고 묶을 수 없는 데이터면 객체 형태로 나타내는 배열이 만들어집니다.

  ```js
  [
    [
      {airport:'신 울란바트로', airline:'몽골항공', codeshare:'Master' ...},
      {airport:'신 울란바트로', airline:'대한항공', codeshare:'Slave' ...},
    ],
    {airport:'자카르타/수카르노하타', airline:'델타항공', codeshare:'Master' ...},
    [
      {airport:'로스앤젤레스', airline:'대한항공', codeshare:'Master' ...},
      {airport:'로스앤젤레스', airline:'란항공', codeshare:'Slave' ...},
      {airport:'로스앤젤레스', airline:'아에로멕시코', codeshare:'Slave' ...},
    ]
    ...
  ]
  ```

  위 데이터 형태를 아래와 같이 사용할 수 있습니다.

  ```jsx
  {
    flightDatas.map((data) =>
      Array.isArray(data) ? (
        <FlightShareItems
          key={`Items-${data[0].estimatedDateTime}-${data[0].flightId}`}
          items={data}
        />
      ) : (
        <FlightItem
          key={`${data.estimatedDateTime}-${data.flightId}`}
          item={data}
        />
      )
    );
  }
  ```

  `flightDatas`가 최종 데이터입니다. 원소가 배열인지 아닌지만 확인하면 쉽게 데이터를 묶어서 표현할 수 있어 좋습니다.

- 배포 시 몽고 DB 해킹 사태

  AWS EC2에서 이 프로젝트를 배포하고 있었습니다. 어느 순간 페이지 하나가 데이터를 불러오지 않아 DB를 확인하니 해킹을 당했습니다. 27017 포트에 모든 ip를 허용하고 계정 인증을 하지 않았서 누구나 DB에 접근 가능해서 이런 사태가 일어난 것 입니다. 그래서 몽고 DB 계정 인증을 설정하고 재실행해서 보안에 신경을 썼습니다.

  **자세한 내용은 [몽고 DB 해킹 방지하기](https://velog.io/@imconfi11/%EB%AA%BD%EA%B3%A0-DB-%ED%95%B4%ED%82%B9-%EB%B0%A9%EC%A7%80%ED%95%98%EA%B8%B0)에 정리했습니다.**
