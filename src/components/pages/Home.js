import React from 'react';
import Card from '../shared/Card';
import Page from './Page';

export default class Home extends React.Component{ 

render(){
return(
      <>
            <Page Title="Home Page title from Helmet" Description="Description Home from Helmet" PageUrl="home">
                  <div className="mdl-grid">
                              <div className="mdl-cell mdl-cell--4-col">
                                    <Card 
                                    title='Lorem ipsum 1'
                                    description=' Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...'
                                    />
                              </div>
                              <div className="mdl-cell mdl-cell--4-col">
                                    <Card 
                                    title='Lorem ipsum 2'
                                    description=' Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...'
                                    />
                              </div>
                              <div className="mdl-cell mdl-cell--4-col">
                                    <Card 
                                    title='Lorem ipsum 3'
                                    description=' Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...'
                                    />
                              </div>

                  </div>
            </Page>
            </>
            )
      }    
}