import React, { Component } from "react";
import { Result, Input, message } from "antd";
import "./Gate.css";
const { Search } = Input;

class Gate extends Component {
  handleInput = e => {
    if (e !== "wakeup!") {
      message.error("코드가 올바르지 않습니다. 다시 시도해주세요.");
    } else {
      message.success("관리자님 환영합니다!");
      this.props.handleAdminCheck();
    }
  };
  render() {
    return (
      <>
        <Result
          status="403"
          title="사이트를 점검 중입니다. "
          subTitle="현재 사이트 점검중입니다. 관계자는 코드를 입력해주세요."
          extra={
            <Search
              placeholder="관리자 코드를 입력하세요."
              enterButton="승인"
              size="large"
              onSearch={this.handleInput}
              style={{ width: "300px" }}
            />
          }
        />
      </>
    );
  }
}

// const Gate = props => {
//   return (
//     <>
//       <Result
//         status="403"
//         title="사이트를 점검 중입니다. "
//         subTitle="현재 사이트 점검중입니다. 관계자는 코드를 입력해주세요."
//         extra={
//           <Button type="primary" onClick={props.handleAdminCheck}>
//             승인
//           </Button>
//         }
//       />
//     </>
//   );
// };

export default Gate;