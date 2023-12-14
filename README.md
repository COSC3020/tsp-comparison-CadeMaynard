[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13216637&assignment_repo_type=AssignmentRepo)
# Traveling Salesperson Problem -- Empirical Analysis

For this exercise, you'll need to take the code from the TSP Held-Karp and TSP
Local Search exercises. This can be your own implementation or somebody else's.
You will now do an empirical analysis of the implementations, comparing their
performance. Both the Held-Karp and the Local Search algorithms solve the same
problem, but they do so in completely different ways. This results in different
solutions, and in different times required to get to the solution.

Investigate the implementations' empirical time complexity, i.e. how the runtime
increases as the input size increases. *Measure* this time by running the code
instead of reasoning from the asymptotic complexity (this is the empirical
part). Create inputs of different sizes and plot how the runtime scales (input
size on the $x$ axis, time on the $y$ axis). Your largest input should have a
runtime of *at least* an hour. The input size that gets you to an hour will
probably not be the same for the Held-Karp and Local Search implementations.

In addition to the measured runtime, plot the tour lengths obtained by both
implementations on the same input distance matrices. The length of the tour that
Held-Karp found should always be less than or equal to the tour length that
Local Search found. Why is this?

Add the code to run your experiments, graphs, and an explanation of what you did
to this markdown file.

## Analysis
I begun by combining both algorithms into a file and then compiling a large set of test matrices with which I would test and time them. Then I recorded the results. Below is a simple graph of how they both performed with varied input sizes. The X-axis represents the number of nodes in the input and the Y-axis represents the the runtime of the algorithms in seconds. Held-Karp is represented by red points and Local-Search is represented by blue points. For the first few input sizes their runtime is so similar that the red points can't be seen because they are behind the blue points.
<img width="925" alt="Screenshot 2023-12-14 at 12 19 16 AM" src="https://github.com/COSC3020/tsp-comparison-CadeMaynard/assets/143521268/3800dd8a-a29f-4b26-8bdc-ab248a344b6e">

The following is a table of the actual data, as my graphing software is not terribly specific:

| Input Size | Held-Karp | Local-Search |
| ---------- | --------- | ------------ |
| 0  | 0.128ms | 0.245ms|
| 1  | 0.005ms | 0.013ms|
| 2  | 0.251ms | 0.143ms |
| 3  | 0.311ms | 0.117ms |
| 4  | 1.108ms | 0.088ms |
| 5  | 10.412ms | 0.09ms |
| 6  | 51.186ms | 0.13ms |
| 7  | 330.458ms | 0.165ms |
| 8  | 3.015s | 0.194ms |
| 9  | 29.337s | 0.199ms |
| 10 | 302.784 | 0.787ms |
| 11 | 3655.105s | 0.748ms |

As the graph and this table make abundantly clear, Held-Karp's runtime appears to grow nearly exponentially whereas Local-Search grows incredibly slowly and stays shorter than even a millisecond for the test values it is given here. But the plot thickens when we get to the actual quality of their outputs. This can be seen in the graph below. Again, Held-Karp is represented by the red dots and Local-Search is represented by the blue dots. The X-axis is input size once more, but the Y-axis is know the length of the path returned by the algorithm.
<img width="188" alt="Screenshot 2023-12-14 at 1 11 11 AM" src="https://github.com/COSC3020/tsp-comparison-CadeMaynard/assets/143521268/10c22330-be83-4861-a4de-c0ccbe3cbc56">

The table below details this as well:

| Input Size | Held-Karp | Local-Search | Error (%) |
| ---------- | --------- | ------------ | ----- |
| 0  | 0 | 0 | 0% |
| 1  | 0 | 0| 0% |
| 2  | 2 | 2 | 0% |
| 3  | 3 | 3 | 0% |
| 4  | 9 | 9 | 0% |
| 5  | 13 | 13 | 0% |
| 6  | 13 | 15 | 15.38% |
| 7  | 20 | 21 | 5% |
| 8  | 15 | 22 | 46.67% |
| 9  | 30 | 44 | 46.67% |
| 10 | 21 | 30 | 42.86% |
| 11 | 29 | 47 | 62.07% |


Held-Karp will always give us the shortest path because of its brute force technique which also explains why it takes so much longer to run than Local-Search. Local search may give us the shortest path, but if not, the hope is that it will at least give us one that is close to it. Due to the random nature of local search there isn't an obvious pattern in the data above. As the input size grows we do know that the error will also grow, because my implementation of local search effectively tries three times to get a good "swapping point". A better implementation would have the number of tries scale with input size but unfortunately I haven't the foresight for that. Another worthwhile piece of information is that, unfortunately due to time restraints, all of this data comes from a single run of the program, rather than an averaging of several runs so it is also possible that the error could improve and worsen with consecutive runs.
