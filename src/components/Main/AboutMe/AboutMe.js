import aboutMe from "../../../image/about-me.png"



import "./AboutMe.css"

export default function AboutMe() {
    return (
        <>
            <section className="about-me">
                <h2 className="title-reuse">Студент</h2>
                <div className="about-me__block">
                    <div className="about-me__info">
                        <h2 className="about-me__title">Андрей</h2>
                        <p className="about-me__subtitle">Фронтенд-разработчик, 21 год</p>
                        <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <a className="about-me__github">Github</a>
                    </div>
                    <img className="about-me__photo" src={aboutMe} />
                </div>
            </section>
        </>
    )
}