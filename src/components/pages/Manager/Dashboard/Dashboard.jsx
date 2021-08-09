import React from 'react';
import { Col } from 'react-bootstrap';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faRupeeSign, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Dashboard(){
    return(
    <React.Fragment>
        <Col lg={12} md={12} sm={12} xs={12} className="dashboard-metric-card-holder">
            <Col lg={4} md={4} sm={12} xs={12} >
                <div className="dashboard-metric-card yellow-card">
                    <div className="icon-count">
                        <FontAwesomeIcon className="count" icon={faTicketAlt} />
                        <label className="metric-count" >3</label>
                    </div>
                        <label className="metric-title" >Total Event Conducted</label>
                </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12} >
                <div className="dashboard-metric-card red-card">
                    <div className="icon-count">
                        <FontAwesomeIcon className="count" icon={faRupeeSign} />
                        <label className="metric-count" >25K</label>
                    </div>
                        <label className="metric-title" >Total Raised Till Today</label>
                </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12} >
                <div className="dashboard-metric-card orange-card">
                    <div className="icon-count">
                        <FontAwesomeIcon className="count" icon={faShoppingBag} />
                        <label className="metric-count" >40</label>
                    </div>
                    <label className="metric-title" >Unique Items Sold</label>
                </div>
            </Col>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12} style={{display:"flex"}}>
            <Col lg={6} md={6} sm={12} xs={12}>
                <HighchartsReact highcharts={Highcharts} options={baroptions} />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
                <HighchartsReact highcharts={Highcharts} options={splineoptions} />
            </Col>
        </Col>
    </React.Fragment>);
}

const splineoptions = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Food Type Sale Comparison'
    },
    xAxis: {
        lineColor: 'none',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        visible:false,
        title: {
            text: 'Total Earned'
        }
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            },
        }
    },
    series: [{
        name: 'Confectionary',
        color:"#87556f",
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'Baked',
        color:"#F8A449",
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
  };

const baroptions = { 
    chart: {
        type: 'column'
    },
    title: {
        text: 'Sales for 2020'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        lineColor: 'none',
        type: 'category'
    },
    yAxis: {
        visible:false,
        title: {
            text: 'Total Earned'
        }
  
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderRadius: 8,
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },
  
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
        {
            name: "Sales Day",
            colorByPoint: true,
            data: [
                {
                    name: "Jan 30th.",
                    y: 62.74,
                    drilldown: "Jan 30th."
                },
                {
                    name: "Feb 27.th",
                    y: 10.57,
                    drilldown: "Feb 27.th"
                },
                {
                    name: "March 30th.",
                    y: 7.23,
                    drilldown: "March 30th."
                },
                {
                    name: "April 14th.",
                    y: 5.58,
                    drilldown: "April 14th."
                },
                {
                    name: "May 1st.",
                    y: 4.02,
                    drilldown: "May 1st."
                },
                {
                    name: "June 10th.",
                    y: 1.92,
                    drilldown: "June 10th."
                },
                {
                    name: "Popups",
                    y: 7.62,
                    drilldown: null
                }
            ]
        }
    ]
  };

export default Dashboard;