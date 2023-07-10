import "./Checkbox.css";

function Checkbox() {
    return (
        <div className="checkbox__container">
            <input className="checkbox__input" type="checkbox" />
            <label className="checkbox__icon">Короткометражки</label>
        </div>
    );
}

export default Checkbox;