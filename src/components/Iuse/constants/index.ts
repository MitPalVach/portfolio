import html5 from '../html5.svg';
import css3 from '../css3.svg';
import reactjs from '../react.svg';
import js from '../js.svg';
import ts from '../ts.svg';
import jquery from '../jquery.svg';


export type PropsIuseType = {
    alt: string
    src: string
    sub: string
    descr: string
}
export const iuseTitle = 'В работе я использую:'
export const iuseData = [
    {
        id: 1,
        alt: 'HTML5',
        src: html5,
        sub: 'HTML5',
        descr: 'Именно с помощью него создается каркас вашего сайта или приложения.'
    },
    {
        id: 2,
        alt: 'CSS3',
        src: css3,
        sub: 'CSS3',
        descr: 'Этот язык стилей позволяет создавать абсолютно любой внешний вид вашего сайта.'
    },
    {
        id: 3,
        alt: 'React',
        src: reactjs,
        sub: 'React',
        descr: 'С помощью React можно создать максимально интерактивный продукт под любые цели.'
    },
    {
        id: 4,
        alt: 'JavaScript',
        src: js,
        sub: 'JavaScript',
        descr: 'JS позволяет оживить все: слайдеры, окна, вкладки, получение данных от сервера и многое другое.'
    },
    {
        id: 5,
        alt: 'TypeScript',
        src: ts,
        sub: 'TypeScript',
        descr: 'TypeScript — язык программирования, позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.'
    },
    {
        id: 6,
        alt: 'jQuery',
        src: jquery,
        sub: 'jQuery',
        descr: 'Библиотека Jquery позволит ускорить разработку. Хорошее решение для не больших сайтов и лендингов.'
    },
]
