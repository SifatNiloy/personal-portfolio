import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, site }) => {
  const visitLink=()=>{
    window.open(
      `${site}`,'_blank' );
  }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt='' />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br /> <br />
          <button onClick={()=>visitLink()} className="btn btn-primary">Visit Site</button>
        </div>
      </div>
    </Col>
  )
}
