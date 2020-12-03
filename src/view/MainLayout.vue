<template>
  <div class="wrapper">
    <div class="box header">Item Token</div>
    <div class="box sidebar">
      <table>
        <tr>
          <td>111</td>
          <td>222</td>
        </tr>
      </table>
    </div>
    <div class="box content">
      <issue-item-token></issue-item-token>
    </div>
    <div class="box footer">Footer
      <Footer :data="footerData"></Footer>
    </div>
  </div>
</template>

<script>
import IssueItemToken from "./IssueItemToken";
import Footer from "./Footer";
export default {
  components: {IssueItemToken, Footer },
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
    footerData:{},
  }),
};
</script>
<style scoped>
body {
  margin: 40px;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.header {
  grid-area: header;
}

.footer {
  grid-area: footer;
}

.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 500px 300px 600px;
  grid-template-areas:
    "....... header header"
    "sidebar content content"
    "footer  footer  footer";
  background-color: #fff;
  color: #444;
}

.box {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  font-size: 150%;
}

.header,
.footer {
  background-color: #999;
}
</style>
