import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,InputGroup } from 'react-bootstrap';
const EditableField = ({cellData,onUpdate})=>{
    return (
        <InputGroup>
            <Form.Control
                className={cellData.textAlign}
                type={cellData.type}
                placeholder={cellData.placeholder}
                min={cellData.min}
                name={cellData.name}
                id={cellData.id}
                value={cellData.value}
                step={cellData.step}
                presicion={cellData.presicion}
                aria-label={cellData.name}
                onChange={onUpdate}
                required
            />
        </InputGroup>
    )
}
export default EditableField