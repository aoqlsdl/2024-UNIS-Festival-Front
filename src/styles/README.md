# Style Convention

## styled-components

css-in-js 라이브러리로 styled-components를 사용합니다.

코드 작성 방법은 아래와 같습니다.

```jsx
// 파일명: (컴포넌트명)Styles.js로, jsx 내부에 작성하지 않고 js 파일을 별도로 생성합니다.
import styled from 'styled-components'

export const ComponentName = styled.(속성 - ex. div, button, ...)`
	(css 코드 입력)
`
```

네이밍 컨벤션을 정하기에는 너무 일이 많아질 것 같아 따로 지정해두지 않았습니다. 네이밍은 자유롭게 해주시되, 파스칼케이스만 지켜주세요!

## 단위

`rem`

대부분의 요소 크기가 고정되어 있으면서 사용자 화면 비율에 맞추어 배치되어야 하므로 주로 rem을 사용합니다. (margin, padding, 이미지, font-size 등)

1rem == 16px입니다.

\*피그마에서 hand over 플러그인을 다운받아 사용하시면 변환값을 쉽게 확인하실 수 있습니다. (사진과 영상은 노션 참고)

\*\*현재 편의를 위해서 아무렇게나 px로 설정해둔 요소들이 있는데, 작업하실 때 그거 지워주시고 rem으로 설정해주시면 됩니다…ㅎㅎ

`vw`

사용자에 따라 크기가 달라질 수 있는 요소(ex. width)는 vw를 사용합니다.

참고) 저는 주로 width 설정시 모바일 사이즈 적용을 위해 아래와 같이 코드를 작성합니다.

```css
width: 100vw;
min-width: 23.438rem;
max-width: 49.125rem;
```

`px`

border-radius 등 사용자 화면 비율에 맞추어 바뀔 필요가 없는 요소에 대해서 px을 사용합니다.

## 이미지

### 확장자명

`.webp`

대부분의 이미지를 다운 받을 때 해당 확장자로 설정해주세요.

피그마에서 WebP Exporter 플러그인을 다운받아 사용하시면 바로 이미지를 다운받으실 수 있습니다(가끔 무한로딩되는 오류 발생할 때 있는데, 피그마 껐다 키면 해결됨)

`.svg`

아이콘, 로고와 같은 작은 이미지를 해당 확장자로 설정해주세요.

### 저장 위치

public 폴더 내부에 imgs, icons 폴더를 생성해두었습니다. 유형에 맞게 저장하여 사용해주세요.
