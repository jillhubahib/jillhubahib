/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 // You can delete this file if you're not using it
 import React from 'react';

 exports.onRenderBody = ({ setPostBodyComponents, pathname }) => {
  if(pathname && pathname.includes("blog/")) { return; }

  return setPostBodyComponents([
    <script
      key={`jquery.min`}
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"
    />,
    <script
      key={`jquery-migrate.min`}
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.2.1/jquery-migrate.min.js"
    />,
    <script
      key={`jquery.flexslider-min`}
      src="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.2.0/jquery.flexslider-min.js"
    />,
    <script
      key={`waypoints.min`}
      src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/1.1.7/waypoints.min.js"
    />,
    <script
      key={`jquery.fittext.min`}
      src="https://cdnjs.cloudflare.com/ajax/libs/FitText.js/1.1/jquery.fittext.min.js"
    />,
    <script
      key={`jquery.magnific-popup.min`}
      src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/0.9.9/jquery.magnific-popup.min.js"
    />
  ]);
}