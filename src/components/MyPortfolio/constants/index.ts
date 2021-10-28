import currencyConvertor from '../img/currency_convertor.png';
import todolist from '../img/todo.png';
import fakeTwitter from '../img/fake_twitter.png';
import social from '../img/social.png';
import weather from '../img/weather.png';
import pexels from '../img/pexels.png';


export type PropsPortfolioType = {
    id: number
    href: string
    alt: string
    portImgHover: string
    portSubTitle: string
    portText: string
    src: string
}
export const portTitle = 'Мои работы:';
export const portfolioData = [
    {
        id: 1,
        href: '/sites/todolist',
        alt: 'todolist',
        portImgHover: 'Посмотреть',
        portSubTitle: 'TodoList с возможностью добавления, удаления, изменения задач и списков задач. Фильтр отображения задач',
        portText: 'SPA на react (typescript), redux, material ui',
        src: todolist,
    },
    {
        id: 2,
        href: '/sites/currency_convertor',
        alt: 'currency_convertor',
        portImgHover: 'Посмотреть',
        portSubTitle: 'Конвертор валют в обе стороны с учетом разницы купли-продажи',
        portText: 'SPA на react (typescript), redux',
        src: currencyConvertor,
    },
    {
        id: 3,
        href: '/sites/fake_twitter',
        alt: 'fake_twitter',
        portImgHover: 'Посмотреть',
        portSubTitle: 'Аналог twitter, с возможностью удалять и добавлять заметки, отметить понравившиеся и поисков по буквам и словам. Фильтр отображения заметок',
        portText: 'SPA на react (javascript)',
        src: fakeTwitter,
    },
    {
        id: 4,
        href: '/sites/social',
        alt: 'social',
        portImgHover: 'Посмотреть',
        portSubTitle: 'Социальная сеть с привязкой к api с возможностью авторизации, добавления друзей, оставлением комментариев и прочим необходимым',
        portText: 'SPA на react (typescript)',
        src: social,
    },
    {
        id: 5,
        href: '/sites/weather',
        alt: 'weather',
        portImgHover: 'Посмотреть',
        portSubTitle: 'Запрос по городам мира и вывод показателей погоды на данный момент. Данные с api - openweathermap.org',
        portText: 'SPA на react (typescript)',
        src: weather,
    },
    {
        id: 6,
        href: '/sites/pexels',
        alt: 'pexels',
        portImgHover: 'Посмотреть',
        portSubTitle: 'Бесплатные картинки с PEXELS',
        portText: 'Запрос по ключевым словам для поиска картинок и фотографий и вывод на экран порциями по 10 штук, с возможностью добавления еще по 10. Данные с api - pexels.com',
        src: pexels,
    }
    // {
    //     id: 1,
    //     href: '/sites/todolist/index.html',
    //     alt: 'todolist',
    //     portImgHover: 'Посмотреть',
    //     portSubTitle: 'TodoList с возможностью добавления, удаления, изменения задач и списков задач. Фильтр отображения задач',
    //     portText: 'SPA на react (typescript), redux, material ui',
    //     src: todolist,
    // },
    // {
    //     id: 2,
    //     href: '/sites/currency_convertor/index.html',
    //     alt: 'currency_convertor',
    //     portImgHover: 'Посмотреть',
    //     portSubTitle: 'Конвертор валют в обе стороны с учетом разницы купли-продажи',
    //     portText: 'SPA на react (typescript), redux',
    //     src: currencyConvertor,
    // },
    // {
    //     id: 3,
    //     href: '/sites/fake_twitter/index.html',
    //     alt: 'fake_twitter',
    //     portImgHover: 'Посмотреть',
    //     portSubTitle: 'Аналог twitter, с возможностью удалять и добавлять заметки, отметить понравившиеся и поисков по буквам и словам. Фильтр отображения заметок',
    //     portText: 'SPA на react (javascript)',
    //     src: fakeTwitter,
    // },
    // {
    //     id: 4,
    //     href: '/sites/social/index.html',
    //     alt: 'social',
    //     portImgHover: 'Посмотреть',
    //     portSubTitle: 'Социальная сеть с привязкой к api с возможностью авторизации, добавления друзей, оставлением комментариев и прочим необходимым',
    //     portText: 'SPA на react (typescript)',
    //     src: social,
    // },
    // {
    //     id: 5,
    //     href: '/sites/weather',
    //     alt: 'weather',
    //     portImgHover: 'Посмотреть',
    //     portSubTitle: 'Запрос по городам мира и вывод показателей погоды на данный момент. Данные с api - openweathermap.org',
    //     portText: 'SPA на react (typescript)',
    //     src: weather,
    // },
    // {
    //     id: 6,
    //     href: '/sites/pexels/index.html',
    //     alt: 'pexels',
    //     portImgHover: 'Посмотреть',
    //     portSubTitle: 'Бесплатные картинки с PEXELS',
    //     portText: 'Запрос по ключевым словам для поиска картинок и фотографий и вывод на экран порциями по 10 штук, с возможностью добавления еще по 10. Данные с api - pexels.com',
    //     src: pexels,
    // }
]

