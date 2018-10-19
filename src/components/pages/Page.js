import React from "react";
import { Helmet  } from "react-helmet";

export default class Page extends React.Component {
    constructor(props){
        super(props);
        this.Title = '';
        this.Description = '';
        this.PageUrl = '';
    }

    render() {

        return(

            <>
            <Helmet>
                <title>{ this.props.Title }</title>
                <meta name="description" content={ this.props.Description }></meta>
                <meta name="author" content="g7Dev"></meta>
                <link rel="canonical" href={'https://webseo.netlify.com/' + this.props.PageUrl } />

                <meta property="og:url"                content={'https://webseo.netlify.com/' + this.props.PageUrl } />
                <meta property="og:type"               content="article" />
                <meta property="og:title"              content={ this.props.Title } />
                <meta property="og:description"        content={ this.props.Description } />
                <meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
            
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@g7dev" />
                <meta name="twitter:creator" content="@g7dev" />
                <meta property="og:url" content={'https://webseo.netlify.com/' + this.props.PageUrl }  />
                <meta property="og:title" content={ this.props.Title } />
                <meta property="og:description" content={ this.props.Description } />
                <meta property="og:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" />
            </Helmet>
            <section>
                { this.props.children }
            </section>
            </>
        )
    }
}