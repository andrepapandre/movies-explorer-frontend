

import "./Techs.css"
import "../../Reuse/reuse.css"

export default function Techs() {
    return (
        <>
            <section className="techs">
                <div className="techs__container">
                    <h2 className="title-reuse">Технологии</h2>
                    <h2 className="techs__title">7 технологий</h2>
                    <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <ul className="techs__block">
                        <li className="techs__blocks-text">HTML</li>
                        <li className="techs__blocks-text">CSS</li>
                        <li className="techs__blocks-text">JS</li>
                        <li className="techs__blocks-text">React</li>
                        <li className="techs__blocks-text">Git</li>
                        <li className="techs__blocks-text">Express.js</li>
                        <li className="techs__blocks-text">mongoDB</li>
                    </ul>
                </div>
            </section>
        </>
    )
}