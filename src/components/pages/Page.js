import React from "react";
import { Helmet  } from "react-helmet";

export default class Page extends React.Component {
    constructor(props){
        super(props);
        this.Title = '';
        this.Description = '';
        
    }

    render() {

        return(

            <>
            <Helmet>
                <title>{ this.props.Title }</title>
                <meta name="description" content={ this.props.Description }></meta>
                <meta name="author" content="g7Dev"></meta>
                <link rel="canonical" href="http://mysite.com/helmet" />
            </Helmet>
            <section>
                { this.props.children }
            </section>
            </>
        )
    }
}