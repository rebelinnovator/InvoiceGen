import { Row,Col,Form } from "react-bootstrap"
import EditableField from "./EditableField"
const InvoiceHeader=({info,onChange})=>{
    return(
        <Row>
            
            <Col md={6}>
                <div className="d-flex flex-row align-items-center mb-2">
                    <span className="fw-bold d-block">Tin:</span>
                    <Form.Control type="text" value={info.tin} name={"tin"} onChange={(event) => {}} style={{
                        maxWidth: '150px'
                    }} required="required"/>
                </div>
                <div className="d-flex flex-row align-items-center mb-2">
                    <span className="fw-bold d-block">Tel:</span>
                    <Form.Control type="text" value={info.tel} name={"tel"} onChange={(event) => {}} style={{
                        maxWidth: '150px'
                    }} required="required"/>
                </div>
            </Col>
            <Col md={6}>
                <div className="d-flex flex-row align-items-center mb-2">
                    <span className="fw-bold d-block">Email:</span>
                    <Form.Control type="text" value={info.email} name={"email"} onChange={(event) => {}} style={{
                        maxWidth: '150px'
                    }} required="required"/>
                </div>
                <div className="d-flex flex-row align-items-center mb-2">
                    <span className="fw-bold d-block">Location:</span>
                    <Form.Control type="text" value={info.location} name={"location"} onChange={(event) => {}} style={{
                        maxWidth: '150px'
                    }} required="required"/>
                </div>
            </Col>
        </Row>
    )
}
export default InvoiceHeader