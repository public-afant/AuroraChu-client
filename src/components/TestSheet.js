import React, { Component } from "react";
import { Button, Radio, Spin } from "antd";

class TestSheet extends Component {
  constructor(props) {
    super(props);

    this.questions = [
      {
        title: "1. 다음 중 마케터와 관계없는 것은?",
        option1: "정답",
        option2: "오답",
        option3: "오답",
        option4: "오답"
      },
      {
        title: "2. 마케팅이란?",
        option1: "오답",
        option2: "정답",
        option3: "오답",
        option4: "오답"
      },
      {
        title: "3. 마케터의 자질은?",
        option1: "오답",
        option2: "오답",
        option3: "정답",
        option4: "오답"
      },
      {
        title: "4. 마케팅에서 중요한 것은?",
        option1: "오답",
        option2: "정답",
        option3: "오답",
        option4: "오답"
      },
      {
        title: "5. 블로그 포스팅이란?",
        option1: "오답",
        option2: "오답",
        option3: "오답",
        option4: "정답"
      }
    ];

    this.answers = {
      1: 1,
      2: 2,
      3: 3,
      4: 2,
      5: 4
    };

    this.cutline = 80;

    this.state = {
      step: 1,
      selectedOptions: {
        1: undefined,
        2: undefined,
        3: undefined,
        4: undefined,
        5: undefined
      },
      score: undefined
    };
  }

  onSelectValue = e => {
    this.setState(prevState =>
      Object.assign(prevState, {
        selectedOptions: {
          ...prevState.selectedOptions,
          [e.target.name]: e.target.value
        }
      })
    );
  };

  onSubmitAnswers = () => {
    this.setState({
      step: 3
    });

    let questionNumbers = Object.getOwnPropertyNames(this.answers);

    let totalQuestions = questionNumbers.length;
    let correctAnswers = 0;

    for (let i = 0; i < questionNumbers.length; i++) {
      let questionNumber = questionNumbers[i];
      if (
        this.state.selectedOptions[questionNumber] ===
        this.answers[questionNumber]
      ) {
        correctAnswers += 1;
      }
    }

    let score = (correctAnswers / totalQuestions) * 100;

    this.setState({
      score: score
    });
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
      marginLeft: 16
    };

    const { step, selectedOptions, score } = this.state;

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h4>시험 보기</h4>
        {step === 1 && (
          <div style={{ alignSelf: "center" }}>
            <img
              src={require("./bridge.png")}
              style={{ width: 700, height: 450 }}
            />
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div>마케터가 되기 위한 마지막 관문 입니다.</div>
              <div>준비 되셨나요?</div>
              <div>신중하게 답안을 선택하세요.</div>
              <div style={{ marginBottom: 40 }}>합격을 기원합니다.</div>
              <Button
                onClick={() =>
                  this.setState({
                    step: 2
                  })
                }
              >
                시험 시작
              </Button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div style={{ marginTop: 30 }}>
            <div
              style={{
                marginLeft: 32
              }}
            >
              {this.questions.map((question, index) => (
                <div>
                  <div>{question.title}</div>
                  <Radio.Group
                    buttonStyle="solid"
                    onChange={this.onSelectValue}
                    value={selectedOptions[index + 1]}
                    name={index + 1}
                    style={{ marginBottom: 24 }}
                  >
                    <Radio style={radioStyle} value={1}>
                      {question.option1}
                    </Radio>
                    <Radio style={radioStyle} value={2}>
                      {question.option2}
                    </Radio>
                    <Radio style={radioStyle} value={3}>
                      {question.option3}
                    </Radio>
                    <Radio style={radioStyle} value={4}>
                      {question.option4}
                    </Radio>
                  </Radio.Group>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 24,
                marginRight: 24,
                marginBottom: 24,
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <Button onClick={this.onSubmitAnswers}>제출하기</Button>
            </div>
          </div>
        )}
        {step === 3 &&
          (score !== undefined ? (
            score >= this.cutline ? (
              <div style={{ alignSelf: "center" }}>
                <img
                  src={require("./bridge.png")}
                  style={{ width: 700, height: 450 }}
                />
                <div
                  style={{
                    marginBottom: 30,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: 30
                    }}
                  >
                    <div>회원님의 점수는</div>
                    <div
                      style={{ color: "red", fontWeight: 600, marginLeft: 1 }}
                    >
                      {score}
                    </div>
                    <div>점 입니다.</div>
                  </div>
                  <div>축하합니다!</div>
                  <div
                    style={{
                      marginBottom: 36
                    }}
                  >
                    지금 바로 마케터로 등록하세요!
                  </div>

                  <div>
                    <Button>마케터 등록</Button>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ alignSelf: "center" }}>
                <img
                  src={require("./bridge.png")}
                  style={{ width: 700, height: 450 }}
                />
                <div
                  style={{
                    marginBottom: 30,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: 30
                    }}
                  >
                    <div>회원님의 점수는</div>
                    <div
                      style={{ color: "red", fontWeight: 600, marginLeft: 1 }}
                    >
                      {score}
                    </div>
                    <div>점 입니다.</div>
                  </div>

                  <div>안타깝게도 불합격 하셨습니다.</div>
                  <div
                    style={{
                      marginBottom: 36
                    }}
                  >
                    조금 더 학습하시고 다시 도전해주세요!
                  </div>

                  <div>
                    <Button
                      onClick={() => {
                        this.props.history.push("/myclassroom");
                      }}
                    >
                      나의 강의실로 돌아가기
                    </Button>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Spin tip="채점 중..." className="spin" />
            </div>
          ))}
      </div>
    );
  }
}

export default TestSheet;
