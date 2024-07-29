import { createGlobalStyle } from "styled-components";
import reset from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${reset}
   html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


&:root {
  --black: #303030; 
  --white: #FFFFFF; 
  --main-red: #EC6E6C; 
  --red-20: #FFB5B1; 
  --main-mint: #7AE6E1; 
  --gray: #F8F8F8; 
  --gray-10: #F5F5F5; 
  --gray-20: #BDBDBD; 


  --home-max-width: 1174px;



  }
.text16 {
  font-family: "Pretendard Variable", sans-serif;
  font-weight: bold;
 font-size: 16px;
}
.text22 {
  font-family: "Pretendard Variable", sans-serif;
 font-weight: 300;
 font-size: 22px;
}
.text32 {
  font-family: "Pretendard Variable", sans-serif;
 font-weight: bold;
 font-size: 32px;
}
`;
 
export default GlobalStyles;