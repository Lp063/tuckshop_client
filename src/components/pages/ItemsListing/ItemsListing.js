import React,{ Component } from 'react';
import { Container, Row, Button} from 'react-bootstrap';

import MenuItem from '../../lists/menuItem/MenuItem';
import LoadingAnimation from '../../spaceHolders/LoadingAnimation';

import './ItemsListing.css';

class ItemsListing extends Component{

    constructor(props) {
        super(props);
        this.state = {
            totalCost:0.0,
            itemList:[],
            itemListExist:false
        };
    }

    async componentDidMount(){
        const foodItemsApi = await this.props.event_items();
        if (foodItemsApi) {
            this.setState({itemList:foodItemsApi});
            this.setState({itemListExist:true});
        }
    }

    menuItemIncremented = (element,id) =>{
        this.setState({itemList: this.state.itemList.map((item)=>{
                if (item.id === id) {
                    item.purchaseQuantity +=1;

                    this.setState({totalCost:(this.state.totalCost+element.props.item.rate)});
                }
                return item;
            })
        });
    }

    menuItemDecremented = (element,id) =>{
        this.setState({itemList: this.state.itemList.map((item)=>{
                if (item.id === id && item.purchaseQuantity !==0) {
                    item.purchaseQuantity -=1;
                    this.setState({totalCost:(this.state.totalCost-element.props.item.rate)});
                }
                return item;
            })
        });
    }

    resetItemsAndTotal = async ()=>{

        this.setState({itemList:[]});

        const foodItemsApi = await this.props.event_items();
        this.setState({itemList:foodItemsApi});

        this.setState({totalCost:0});
    }

    checkoutButtonClicked = () => {
        const data={
            totalCost:this.state.totalCost,
            listOfItems:this.state.itemList.filter((item)=>{
                return item.purchaseQuantity !==0;
            })
        };
        this.props.itemsCheckedOut(data).then(apiData =>{
            if (apiData.data.success) {
                this.resetItemsAndTotal();
            } else {
                console.log(apiData);
            }
        });
    }

    enableDisableResetDone = (totalCost) => {
        var returnBool = true;
        if (totalCost) {
            returnBool = false;
        }
        return returnBool;
    }

    render(){
        var itemRows;

        if (this.state.itemListExist) {
            const { itemList } = this.state;
            itemRows = itemList.map((item)=>{
                return <MenuItem key={item.id} item={item} menuItemIncremented={this.menuItemIncremented} menuItemDecremented={this.menuItemDecremented}/>
            });
        }
        
        return(
            <React.Fragment>
                <Container>
                    <Row lg={1} md={1} sm={1} xs={1} style={{paddingBottom:"130px"}}>
                        { 
                            this.state.itemListExist?itemRows:<LoadingAnimation />
                        }
                    </Row>
                </Container>
                <footer className="item-listing-footer">
                    <Container>
                        <div className="item-listing-totals">
                            <div className="item-listing-footer-labels"><label>Total:</label></div>
                            <div className="item-listing-footer-labels"><label>{this.state.totalCost}</label></div>
                        </div>
                        <div className="item-listing-reset-done">
                            <Button className="item-listing-footer-button button-reset" variant="danger" size="lg" onClick={this.resetItemsAndTotal.bind(this)} disabled={this.enableDisableResetDone(this.state.totalCost)}>Reset</Button>
                            <Button className="item-listing-footer-button button-done" variant="success" size="lg" onClick={this.checkoutButtonClicked.bind(this)} disabled={this.enableDisableResetDone(this.state.totalCost)}>Done</Button>
                        </div>
                    </Container>
                </footer>
            </ React.Fragment>
        )
    }
}

export default ItemsListing