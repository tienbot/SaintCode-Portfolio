import img from "..//DropDownEducation/DropDownEducationImg/Vector (5).svg"
import s from "..//DropDownEducation/DropDownEducation.module.sass"
export  const DropDownEducation = () => {
  return (
      <ul className={s.ul}>
          <li><img src={img} className={s.img} /> high school </li>
          <li><img src={img}/> university</li>
      </ul>
  )
}
export default DropDownEducation;