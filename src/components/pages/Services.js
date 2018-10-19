import React from 'react';
import Page from './Page';

export default () => 
<>
      <Page Title="Services Page" Description="Description Services" PageUrl="services">
            <div className="mdl-grid">
                  <h1>Services</h1>
                  <p>
                  Twitter card tags look similar to Open Graph tags, and are based on the same conventions as the Open Graph protocol. When using Open Graph protocol to describe data on a page, it is easy to generate a Twitter card without duplicating tags and data. When the Twitter card processor looks for tags on a page, it first checks for the Twitter-specific property, and if not present, falls back to the supported Open Graph property. This allows for both to be defined on the page independently, and minimizes the amount of duplicate markup required to describe content and experience.
                  </p>
            </div>
      </Page>
</>