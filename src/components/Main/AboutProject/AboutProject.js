import "./AboutProject.css"


export default function AboutProject() {
    return (
        <>
            <section className="about-project">
                <h2 className="title-reuse">О проекте</h2>
                <div className="about-project__two-section">
                    <div className="about-project__block">
                        <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="about-project__block">
                        <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="about-project__progress-area">
                    <p className="about-project__progress-text-one">1 неделя</p>
                    <p className="about-project__progress-text-two">4 недели</p>
                    <p className="about-project__progress-text-three">Back-end</p>
                    <p className="about-project__progress-text-three">Front-end</p>
                </div>

            </section>
        </>
    )
}
