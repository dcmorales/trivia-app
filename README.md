# Trivia App

<p align="center">
Answer 10 true or false trivia questions and see how many you get right!
</p>

## Install 
Clone repo locally then complete installation

```bash
#install dependencies
npm install

#start app up
npm start

```

## API
This trivia app uses the [opentdb api](https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean) to retrieve the list of questions. A sample JSON response would return as follows:


```bash
{
  response_code: 0,
    results: [
      {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question: "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
        correct_answer: "True",
        incorrect_answers: [
          "False"
        ]
      },...]}
```

## Usage
1. When prompted click 'Begin'
2. You will be presented with a question. If you believe the answer is true, click 'true', otherwise click 'false'
3. Answer all questions and your results will appear at the end

## Scoring
For every question you answer correctly, you will receive 1 point. The max score is 10 and the minimum score is 0. Let's try to get 10!

