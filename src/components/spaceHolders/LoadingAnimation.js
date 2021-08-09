import React from 'react'
import { Spinner } from 'react-bootstrap';

function LoadingAnimation(){

    return <div style={{margin:"auto",marginTop:"25vh"}}><Spinner animation="border" variant="secondary" role="status" style={{margin:"auto"}}><span className="sr-only">Loading...</span></Spinner></div>;
}

export default LoadingAnimation;