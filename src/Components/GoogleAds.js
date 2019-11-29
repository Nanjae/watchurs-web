import React from "react";
import styled from "styled-components";
import AdSense from "react-adsense";

const GoogleAdsDiv = styled.div`
  position: fixed;
  width: 160px;
  height: 600px;
`;

export default () => {
  return (
    <GoogleAdsDiv>
      <AdSense.Google
        client="ca-pub-2379639620636294"
        slot="6765307417"
        style={{ display: "inline-block", width: 160, height: 600 }}
      />
    </GoogleAdsDiv>
  );
};

{
  /* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- watchurs_ads_left -->
<ins class="adsbygoogle"
     style="display:inline-block;width:160px;height:600px"
     data-ad-client="ca-pub-2379639620636294"
     data-ad-slot="6765307417"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> */
  /* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- watchurs_ads_right -->
<ins class="adsbygoogle"
     style="display:inline-block;width:160px;height:600px"
     data-ad-client="ca-pub-2379639620636294"
     data-ad-slot="5316494373"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> */
}
