import React,{Component} from 'react';
import { Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import './MenuItem.css'

class MenuItem extends Component{

    render(){
        const {id,title,serving,rate,purchaseQuantity} = this.props.item;
        return (
            <Col lg={6} md={6} sm={12} sx={12} className="menu-item" style={{alignSelf: "center",margin:"2% 0%"}}>
                <div className="menu-item-card">
                    <div className="menu-item-rate-serving">
                        <label className="menu-item-title" >{title}</label>
                        <label className="menu-item-serve-rate">{serving} @  INR{rate}</label>
                    </div>
                    <div className="menu-item-count-buttons">
                        <label className="menu-item-quantity">{purchaseQuantity}</label>
                        <div className="menu-item-buttons-p-m">
                            <Button className="menu-item-button mi-button-p" onClick={()=>this.props.menuItemDecremented(this,id)} variant="danger">
                                <FontAwesomeIcon className="mi-button-fa" icon={faMinus} />
                            </Button>
                            <Button className="menu-item-button mi-button-n" onClick={()=>this.props.menuItemIncremented(this,id)} variant="success">
                                <FontAwesomeIcon className="mi-button-fa" icon={faPlus} />
                            </Button>
                        </div>
                    </div>
                </div>
            </Col>
        );
    };
}

export default MenuItem