export default function Contacts(props) {
  return (
    <div className={props.style_class}>
      <div id={props.style_id_1}>
        <a href="mailto:egeneoletu@gmail.com">
          egeneoletu@gmail.com
        </a>
      </div>
      <div id={props.style_id_2}>
        <a href="https://github.com/EgeneO" target="_blank">
          GitHub
        </a>
        &nbsp;&#xB7;&nbsp;
        <a href="https://www.instagram.com/egeneo/" target="_blank">
          Instagram
        </a>
        &nbsp;&#xB7;&nbsp;
        <a href="https://www.linkedin.com/in/egene-o-8b0924136" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  )
}
