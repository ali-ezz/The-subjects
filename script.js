import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
// Replace with your actual keys
const supabaseUrl = 'https://ekvnobxzryfxsvmwvhbj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdm5vYnh6cnlmeHN2bXd2aGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MTkyNzQsImV4cCI6MjA1MTI5NTI3NH0.JYx3l4XtRJu58tAa3r-HTJBfDXZ2G50RgC6M69rZseg';
export const supabase = createClient(supabaseUrl, supabaseKey);

const box1Filters = {
    'Filter 1': 'مواد عامه',
    'Filter 2': 'علوم البيانات',
    'Filter 3': 'الوسائط',
    'Filter 4': 'الانسان الالي'
};
const box2Filters = {
    'Filter 1': ['الترم الاول', 'الترم الثاني', 'الترم الثالث', 'الترم الرابع'],
    'Filter 2': ['🗃الترم الخامس🗃', '🗃الترم السادس🗃', '🗃الترم السابع🗃', '🗃الترم الثامن🗃'],
    'Filter 3': ['📸الترم الخامس📸', '📸الترم السادس📸','📸الترم السابع📸','📸الترم الثامن📸'],
    'Filter 4': ['🤖الترم الخامس🤖', '🤖الترم السادس🤖','🤖الترم السابع🤖','🤖الترم الثامن🤖']
};
const labels = {
    'الترم الاول': ['English I', 'Social Issues and Anti-Corruption', 'Mathematics', 'Discrete Mathematics', 'Statistics and Probabilities', 'Introduction to Computers', 'Fundamentals of Information Systems'],
    'الترم الثاني': ['English II', 'Logic Design', 'Programming', 'Physics', 'Sustainable Development', 'Fundamentals of Economics', 'Professional Ethics', 'Creative Thinking', 'Mass Communication', 'Advanced Mathematics', 'Fundamentals of Management'],
    'الترم الثالث': ['Electronics', 'Algorithms', 'Database System', 'Computer Networks', 'Operating Systems', 'Advanced Statistics and Probabilities', 'Linear Algebra', 'Signal and Systems'],
    'الترم الرابع': ['System Analysis and Design', 'Data Structures', 'Advanced Statistics and Probabilities', 'Linear Algebra', 'Signal and Systems', 'Modeling and Simulation', 'Internet Technology', 'Advanced Programming', 'Software Projects Management', 'Artificial Intelligence', 'Data Warehouse'],
    '🗃الترم الخامس🗃': ['Advanced Database', 'Data Management', 'Database Security', 'Machine Learning', 'Data Analysis Algorithms', 'Microeconomics and Informatics', 'Basic of AI Programming Skills'],
    '🗃الترم السادس🗃': ['Practical Data Mining', 'Introduction to Big Data', 'Data Visualization', 'R and Python Programming Language', 'Neural Networks and Deep Learning', 'Technology of Cryptocurrencies', 'Elements of Econometrics'],
    '🗃الترم السابع🗃': ['Hadoop and Apache Spark Essentials', 'Information Modelling', 'Knowledgebase Management Systems', 'Graduation Project 1', 'Logistics', 'Legal Basis and IT Law', 'Reinforcement Learning', 'Data Wrangling'],
    '🗃الترم الثامن🗃': ['Big Data Analysis', 'Practical Data Science', 'Graduation Project 2', 'Practical Training - 2', 'Communication and Negotiation Skills', 'Innovation & Entrepreneurship', 'Problem Solving & Decision-Making Skills'],
    '📸الترم الخامس📸': ['Introduction to Art and Design', 'Web Design', 'Foundations of Digital Graphic Design', 'Multimedia Programming', 'Selected Topics in Media Arts and Technology', 'Introduction to Digital Music', 'Drawing Studio'],
    '📸الترم السادس📸': ['Multimedia Design', 'Computer Aided Design', 'HCI And Applications', 'Game Programming', 'Visual Communications and Design', 'The Mass Media', 'Communication and Negotiation Skills', 'Innovation & Entrepreneurship', 'Problem Solving & Decision-Making Skills'],
    '📸الترم السابع📸': ['Advanced Multimedia Programming', 'Digital Photography and Media Production', 'Introduction to 2D Animation', 'Graduation Project 1','Visual Effects, Compositing and Mixed Media', 'Introduction to Video Graphics'],
    '📸الترم الثامن📸': ['Introduction to 3D Modeling and Animation', 'Typography and Layout', 'Image And Video Processing', 'Virtual Reality and Tele-Presence', 'Graduation Project 2', 'Practical Training - 2'],
    '🤖الترم الخامس🤖': ['Pattern Recognition', 'Real-Time Systems', 'Micro Processors', 'Computer Architecture', 'Machine Learning', 'Robotics Selected Topics', 'Virtual Reality'],
    '🤖الترم السادس🤖': ['Neural Networks', 'Parallel Processing', 'Automatic Control', 'Embedded Systems', 'Computer Networks and Information Security', 'Digital Signal Processing', 'Computer Vision', 'Speech Processing'],
    '🤖الترم السابع🤖': ['Robot Design', 'Robot Arms', 'Natural Language Processing', 'Graduation Project 1', 'Computer Networks and Information Security', 'Digital Signal Processing', 'Computer Vision', 'Speech Processing'],
    '🤖الترم الثامن🤖': ['Sensors and Actuators', 'Mobile Robots', 'Graduation Project 2', 'Practical Training - 2', 'Communication and Negotiation Skills', 'Innovation & Entrepreneurship', 'Problem Solving & Decision-Making Skills']
};
const contentItems = {
    'الترم الاول': [
        { src: 'images/English I.jpeg', label: 'English I', customContent: '<h3>the course data</h3><br><h4>the code:GEN 101&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>The material improves advanced learners grammar and communication through diverse texts and activities.</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required </h3>' },
        { src: 'images/Social issues and anti-corruption.jpeg', label: 'Social Issues and Anti-Corruption', customContent: '<h3>the course data</h3><br><h4>the code:GEN 103&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course explores key social issues such as inequality and human rights, with a focus on how corruption exacerbates these problems. Students will examine the causes and impacts of corruption and explore global efforts to promote transparency and accountability</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Mathematics.jpeg', label: 'Mathematics', customContent: '<h3>the course data</h3><br><h4>the code:BAS 101&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:2/0</h4><br><h3>Course description</h3><br><h4>This course provides a foundation in essential mathematical concepts, including algebra, geometry, calculus, and statistics. Students will develop problem-solving and analytical skills, applying mathematical principles to real-world situations across various fields</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Discrete Mathematics.jpeg', label: 'Discrete Mathematics', customContent: '<h3>the course data</h3><br><h4>the code:BAS 102&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:2/0</h4><br><h3>Course description</h3><br><h4>This course covers fundamental topics in discrete mathematics, including logic, set theory, combinatorics, graph theory, and algorithms. Students will develop critical thinking and problem-solving skills, with applications in computer science, cryptography, and network theory</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Statistics and Probabilities.jpeg', label: 'Statistics and Probabilities', customContent: '<h3>the course data</h3><br><h4>the code:BAS 104&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:2/0</h4><br><h3>Course description</h3><br><h4>This course introduces key concepts in statistics and probability theory, including data analysis, probability distributions, hypothesis testing, and statistical inference. Students will learn to apply these concepts to solve real-world problems and make informed decisions based on data</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Introduction to Computers.jpeg', label: 'Introduction to Computers', customContent: '<h3>the course data</h3><br><h4>the code:COM 101&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course provides an overview of computer fundamentals, including hardware, software, operating systems, and basic networking. Students will learn how computers work, explore common applications, and develop essential skills for navigating modern computing environments</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Fundamentals of Information Systems.jpeg', label: 'Fundamentals of Information Systems', customContent: '<h3>the course data</h3><br><h4>the code:COM 102&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the basic concepts of information systems, including their role in organizations, types of systems, and key technologies. Students will explore how information systems support decision-making, business operations, and data management</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'}
    ],
    'الترم الثاني': [
        { src: 'images/English II.jpeg', label: 'English II', customContent: '<h3>the course data</h3><br><h4>the code:GEN 102&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course builds on foundational English skills, focusing on advanced grammar, composition, and critical reading. Students will enhance their writing, analytical, and communication abilities through diverse literary and non-literary texts</h4><br><h3>Pre-request Courses</h3><br><h3>English I</h3>'},
        { src: 'images/Logic Design.jpeg', label: 'Logic Design', customContent: '<h3>the course data</h3><br><h4>the code:COM 104&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the principles of digital logic design, including Boolean algebra, logic gates, combinational and sequential circuits, and digital systems. Students will learn to design, analyze, and implement digital circuits and systems</h4><br><h3>Pre-request Courses</h3><br><h3>Discrete Mathematics</h3>'},
        { src: 'images/Programming.jpeg', label: 'Programming', customContent: '<h3>the course data</h3><br><h4>the code:COM 103&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces fundamental programming concepts, including variables, control structures, functions, and data structures. Students will develop problem-solving skills by writing and debugging code in a high-level programming language</h4><br><h3>Pre-request Courses</h3><br><h3>Introduction to Computers</h3>'},
        { src: 'images/Physics.jpeg', label: 'Physics', customContent: '<h3>the course data</h3><br><h4>the code:BAS 103&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers fundamental principles of physics, including mechanics, electromagnetism, thermodynamics, and wave phenomena. Students will explore key concepts through theoretical study and practical experiments to understand the physical world and its laws</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Sustainable Development.jpeg', label: 'Sustainable Development', customContent: '<h3>the course data</h3><br><h4>the code:GEN 311&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course explores the principles and practices of sustainable development, focusing on balancing economic growth, environmental protection, and social equity. Students will examine global challenges and strategies for promoting sustainable practices and policies</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>' },
        { src: 'images/Fundamentals of Economics.jpeg', label: 'Fundamentals of Economics', customContent: '<h3>the course data</h3><br><h4>the code:GEN 110&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course covers key concepts in economics, including supply and demand, market structures, economic indicators, and fiscal policies. Students will learn to analyze economic systems, make informed decisions, and understand the impact of economic forces on individuals and societies</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Professional Ethics.jpeg', label: 'Professional Ethics', customContent: '<h3>the course data</h3><br><h4>the code:GEN 115&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course examines ethical principles and standards in professional settings. Students will explore topics such as moral decision-making, ethical dilemmas, professional conduct, and regulatory frameworks to develop a strong understanding of ethical practices and responsibilities in various professions</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Creative Thinking.jpeg', label: 'Creative Thinking', customContent: '<h3>the course data</h3><br><h4>the code:GEN 113&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course fosters innovative problem-solving and idea generation through techniques in creative thinking. Students will engage in exercises and projects designed to enhance their ability to approach challenges from new perspectives and develop original solutions</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Mass Communication.jpeg', label: 'Mass Communication', customContent: '<h3>the course data</h3><br><h4>the code:GEN 114&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course explores the principles and practices of mass communication, including media theories, journalism, broadcasting, and digital media. Students will analyze the role of media in society, its impact on public opinion, and the techniques used to effectively communicate messages to large audiences</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>' },
        { src: 'images/Advanced Mathematics.jpeg', label: 'Advanced Mathematics', customContent: '<h3>the course data</h3><br><h4>the code:BAS 210&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:2/0</h4><br><h3>Course description</h3><br><h4>This course delves into higher-level mathematical concepts, including advanced calculus, linear algebra, differential equations, and complex analysis. Students will develop a deeper understanding of mathematical theory and its applications across various fields</h4><br><h3>Pre-request Courses</h3><br><h3>Mathematics'},
        { src: 'images/Fundamentals of Management.jpeg', label: 'Fundamentals of Management', customContent: '<h3>the course data</h3><br><h4>the code:BAS 203&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course covers essential management principles, including planning, organizing, leading, and controlling. Students will explore key concepts in organizational behavior, decision-making, and strategic management to develop foundational skills for effective management practices</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'}
    ],
    'الترم الثالث': [
        { src: 'images/Electronics.jpeg', label: 'Electronics', customContent: '<h3>the course data</h3><br><h4>the code:BAS 201&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces fundamental concepts in electronics, including circuit analysis, semiconductor devices, amplifiers, and digital electronics. Students will learn to design, analyze, and troubleshoot electronic circuits and systems</h4><br><h3>Pre-request Courses</h3><br><h3>Physics</h3>' },
        { src: 'images/Algorithms.jpeg', label: 'Algorithms', customContent: '<h3>the course data</h3><br><h4>the code:COM 202&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores fundamental algorithms and data structures, including sorting, searching, graph algorithms, and dynamic programming. Students will learn to design, analyze, and implement efficient algorithms to solve complex computational problems</h4><br><h3>Pre-request Courses</h3><br><h3></h3>' },
        { src: 'images/Database System.jpeg', label: 'Database System', customContent: '<h3>the course data</h3><br><h4>the code:COM 203&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the principles of database systems, including data modeling, relational databases, SQL, and transaction management. Students will learn to design, implement, and manage databases to efficiently store and retrieve data</h4><br><h3>Pre-request Courses</h3><br><h3>Fundamentals of Information Systems</h3>'},
        { src: 'images/Computer Networks.jpeg', label: 'Computer Networks', customContent: '<h3>the course data</h3><br><h4>the code:COM 204&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the fundamentals of computer networks, including network architectures, protocols, and data transmission. Students will explore topics such as network design, routing, security, and troubleshooting to understand how data is exchanged across networks</h4><br><h3>Pre-request Courses</h3><br><h3>Introduction to Computers</h3>'},
        { src: 'images/Operating Systems.jpeg', label: 'Operating Systems', customContent: '<h3>the course data</h3><br><h4>the code:COM 205&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the concepts and functions of operating systems, including process management, memory management, file systems, and system calls. Students will learn how operating systems manage hardware resources and provide services for application software</h4><br><h3>Pre-request Courses</h3><br><h3>Programming</h3>'},
        { src: 'images/Advanced Statistics and Probabilities.jpeg', label: 'Advanced Statistics and Probabilities', customContent: '<h3>the course data</h3><br><h4>the code:BAS 202&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:2/0</h4><br><h3>Course description</h3><br><h4>This course explores advanced topics in statistics and probability, including multivariate analysis, Bayesian statistics, and stochastic processes. Students will apply these concepts to complex data analysis and decision-making problems</h4><br><h3>Pre-request Courses</h3><br><h3>Statistics and Probabilities</h3>'},
        { src: 'images/Linear Algebra.jpeg', label: 'Linear Algebra', customContent: '<h3>the course data</h3><br><h4>the code:BAS 204&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab2/0:</h4><br><h3>Course description</h3><br><h4>This course covers key concepts in linear algebra, including vector spaces, matrices, eigenvalues, and linear transformations. Students will learn to solve systems of linear equations and apply linear algebra techniques to various problems in mathematics and applied fields</h4><br><h3>Pre-request Courses</h3><br><h3>Discrete Mathematics</h3>'},
        { src: 'images/Signal and Systems.jpeg', label: 'Signal and Systems', customContent: '<h3>the course data</h3><br><h4>the code:BAS 205&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the fundamental concepts of signals and systems, including signal representation, system analysis, and linear time-invariant systems. Students will explore techniques for analyzing and processing signals using methods from both the time and frequency domains</h4><br><h3>Pre-request Courses</h3><br><h3>Advanced Mathematics</h3>'}
    ],
    'الترم الرابع': [
        { src: 'images/System Analysis and Design.jpeg', label: 'System Analysis and Design', customContent: '<h3>the course data</h3><br><h4>the code:COM 206&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the methodologies and techniques for analyzing and designing information systems. Students will learn about requirements gathering, system modeling, design principles, and implementation strategies to create effective and efficient information systems</h4><br><h3>Pre-request Courses</h3><br><h3>Fundamentals of Information Systems</h3>'},
        { src: 'images/Data Structures.jpeg', label: 'Data Structures', customContent: '<h3>the course data</h3><br><h4>the code:COM 207&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers essential data structures, including arrays, linked lists, stacks, queues, trees, and graphs. Students will learn to implement and analyze these structures to efficiently organize, store, and manipulate data for various computational problems</h4><br><h3>Pre-request Courses</h3><br><h3>Algorithms</h3>'},
        { src: 'images/Advanced Statistics and Probabilities.jpeg', label: 'Advanced Statistics and Probabilities', customContent: '<h3>the course data</h3><br><h4>the code:BAS 202&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:2/0</h4><br><h3>Course description</h3><br><h4>This course explores advanced topics in statistics and probability, including multivariate analysis, Bayesian statistics, and stochastic processes. Students will apply these concepts to complex data analysis and decision-making problems</h4><br><h3>Pre-request Courses</h3><br><h3>Statistics and Probabilities</h3>'},
        { src: 'images/Linear Algebra.jpeg', label: 'Linear Algebra', customContent: '<h3>the course data</h3><br><h4>the code:BAS 204&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab2/0:</h4><br><h3>Course description</h3><br><h4>This course covers key concepts in linear algebra, including vector spaces, matrices, eigenvalues, and linear transformations. Students will learn to solve systems of linear equations and apply linear algebra techniques to various problems in mathematics and applied fields</h4><br><h3>Pre-request Courses</h3><br><h3>Discrete Mathematics</h3>'},
        { src: 'images/Signal and Systems.jpeg', label: 'Signal and Systems', customContent: '<h3>the course data</h3><br><h4>the code:BAS 205&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the fundamental concepts of signals and systems, including signal representation, system analysis, and linear time-invariant systems. Students will explore techniques for analyzing and processing signals using methods from both the time and frequency domains</h4><br><h3>Pre-request Courses</h3><br><h3>Advanced Mathematics</h3>'},
        { src: 'images/Modeling and Simulation.jpeg', label: 'Modeling and Simulation', customContent: '<h3>the course data</h3><br><h4>the code:COM 208&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores techniques for modeling and simulating complex systems, including discrete-event simulation, system dynamics, and Monte Carlo methods. Students will learn to create and analyze models to predict system behavior and make informed decisions</h4><br><h3>Pre-request Courses</h3><br><h3>Advanced Mathematics</h3>'},
        { src: 'images/Internet Technology.jpeg', label: 'Internet Technology', customContent: '<h3>the course data</h3><br><h4>the code:COM 209&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the principles and technologies behind the Internet, including networking protocols, web development, cloud computing, and security. Students will learn how Internet technologies work together to support online communication and services</h4><br><h3>Pre-request Courses</h3><br><h3>Computer Networks</h3>'},
        { src: 'images/Advanced Programming.jpeg', label: 'Advanced Programming', customContent: '<h3>the course data</h3><br><h4>the code:COM 210&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course delves into advanced programming concepts, including design patterns, concurrent programming, and performance optimization. Students will enhance their coding skills by tackling complex problems and developing efficient, scalable software solutions</h4><br><h3>Pre-request Courses</h3><br><h3>Algorithms</h3>'},
        { src: 'images/Software Projects Management.jpeg', label: 'Software Projects Management', customContent: '<h3>the course data</h3><br><h4>the code:COM 211&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course focuses on managing software development projects, including project planning, scheduling, risk management, and quality assurance. Students will learn to apply project management methodologies and tools to oversee and deliver successful software projects</h4><br><h3>Pre-request Courses</h3><br><h3>System Analysis and Design</h3>'},
        { src: 'images/Artificial Intelligence.jpeg', label: 'Artificial Intelligence', customContent: '<h3>the course data</h3><br><h4>the code:COM 212&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the principles and techniques of artificial intelligence, including machine learning, neural networks, natural language processing, and robotics. Students will learn to develop AI models and systems to solve complex problems and understand the ethical implications of AI technology</h4><br><h3>Pre-request Courses</h3><br><h3>Algorithms</h3>'},
        { src: 'images/Data Warehouse.jpeg', label: 'Data Warehouse', customContent: '<h3>the course data</h3><br><h4>the code:COM 213&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the design and implementation of data warehousing solutions, including data modeling, ETL processes, and OLAP. Students will learn to develop and manage data warehouses for efficient data storage, retrieval, and analysis</h4><br><h3>Pre-request Courses</h3><br><h3>Database System</h3>'}
    ],
    '🗃الترم الخامس🗃': [
        { src: 'images/Advanced Database.jpeg', label: 'Advanced Database', customContent: '<h3>the course data</h3><br><h4>the code:DSC 301&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores advanced topics in database systems, including database optimization, distributed databases, NoSQL databases, and data warehousing. Students will learn to tackle complex database design and management challenges and enhance database performance</h4><br><h3>Pre-request Courses</h3><br><h3>Algorithms</h3>'},
        { src: 'images/Data Management.jpeg', label: 'Data Management', customContent: '<h3>the course data</h3><br><h4>the code:DSC 302&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the principles and practices of data management, including data governance, storage, retrieval, and security. Students will learn techniques for organizing, maintaining, and protecting data to ensure its accuracy, availability, and integrity</h4><br><h3>Pre-request Courses</h3><br><h3>Operating Systems</h3>'},
        { src: 'images/Database Security.jpeg', label: 'Database Security', customContent: '<h3>the course data</h3><br><h4>the code:DSC 303&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course focuses on the techniques and strategies for securing databases, including access control, encryption, auditing, and threat detection. Students will learn how to protect sensitive data from breaches and ensure database integrity and confidentiality</h4><br><h3>Pre-request Courses</h3><br><h3>Logic Design</h3>'},
        { src: 'images/Machine Learning.jpeg', label: 'Machine Learning', customContent: '<h3>the course data</h3><br><h4>the code:DSC 309&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the principles and techniques of machine learning, including supervised and unsupervised learning, neural networks, and reinforcement learning. Students will learn to develop algorithms and models to analyze data, make predictions, and solve complex problems</h4><br><h3>Pre-request Courses</h3><br><h3>Operating Systems</h3>'},
        { src: 'images/Data Analysis Algorithms.jpeg', label: 'Data Analysis Algorithms', customContent: '<h3>the course data</h3><br><h4>the code:DSC 307&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course focuses on algorithms used in data analysis, including clustering, classification, regression, and dimensionality reduction. Students will learn to apply these algorithms to extract insights from data, identify patterns, and make data-driven decisions</h4><br><h3>Pre-request Courses</h3><br><h3>Discrete Mathematics</h3>'},
        { src: 'images/Microeconomics and Informatics.jpeg', label: 'Microeconomics and Informatics', customContent: '<h3>the course data</h3><br><h4>the code:DSC 316&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the principles of microeconomics, including supply and demand, market structures, and consumer behavior, with a focus on how informatics and data analysis impact economic decision-making. Students will learn to apply economic models using digital tools and analyze the role of information systems in the economy</h4><br><h3>Pre-request Courses</h3><br><h3>Fundamentals of Economics</h3>'},
        { src: 'images/Basic of AI Programming Skills.jpeg', label: 'Basic of AI Programming Skills', customContent: '<h3>the course data</h3><br><h4>the code:DSC 311&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the foundational skills needed for AI programming, covering topics such as algorithms, data structures, and basic machine learning techniques. Students will learn to implement AI models using programming languages like Python and develop solutions to simple AI problems</h4><br><h3>Pre-request Courses</h3><br><h3>Artificial Intelligence</h3>'}
    ],
    '🗃الترم السادس🗃': [
        { src: 'images/Practical Data Mining.jpeg', label: 'Practical Data Mining', customContent: '<h3>the course data</h3><br><h4>the code:DSC 304&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course focuses on the practical application of data mining techniques, including pattern discovery, classification, clustering, and association rule learning. Students will work with real-world datasets to uncover insights, make predictions, and support decision-making through data analysis</h4><br><h3>Pre-request Courses</h3><br><h3>Advanced Database</h3>'},
        { src: 'images/Introduction to Big Data.jpeg', label: 'Introduction to Big Data', customContent: '<h3>the course data</h3><br><h4>the code:DSC 305&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course provides an overview of big data concepts, including data collection, storage, processing, and analysis of large-scale datasets. Students will explore tools and technologies such as Hadoop and Spark, and learn how big data is applied in various industries to drive decision-making</h4><br><h3>Pre-request Courses</h3><br><h3>Advanced Database</h3>'},
        { src: 'images/Data Visualization.jpeg', label: 'Data Visualization', customContent: '<h3>the course data</h3><br><h4>the code:DSC 308&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the principles and techniques of data visualization, including chart design, interactive dashboards, and storytelling with data. Students will learn to create visual representations of complex datasets to effectively communicate insights and support decision-making</h4><br><h3>Pre-request Courses</h3><br><h3>Advanced Database</h3>'},
        { src: 'images/R and Python Programming Language.jpeg', label: 'R and Python Programming Language', customContent: '<h3>the course data</h3><br><h4>the code:DSC 306&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces programming in both R and Python, focusing on their applications in data analysis, machine learning, and statistical computing. Students will learn to write code, manipulate data, and implement algorithms using both languages to solve real-world problems</h4><br><h3>Pre-request Courses</h3><br><h3>Advanced Programming</h3>'},
        { src: 'images/Neural Networks and Deep Learning.jpeg', label: 'Neural Networks and Deep Learning', customContent: '<h3>the course data</h3><br><h4>the code:DSC 312&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the fundamentals of neural networks and deep learning, including architecture design, training techniques, and applications. Students will learn to build and optimize deep learning models for tasks such as image recognition, natural language processing, and more</h4><br><h3>Pre-request Courses</h3><br><h3>Machine Learning</h3>'},
        { src: 'images/Technology of Cryptocurrencies.jpeg', label: 'Technology of Cryptocurrencies', customContent: '<h3>the course data</h3><br><h4>the code:DSC 313&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the technology behind cryptocurrencies, including blockchain fundamentals, consensus algorithms, and smart contracts. Students will learn about the mechanisms of cryptocurrency transactions, security issues, and the impact of digital currencies on financial systems</h4><br><h3>Pre-request Courses</h3><br><h3>Database Security</h3>'},
        { src: 'images/Elements of Econometrics.jpeg', label: 'Elements of Econometrics', customContent: '<h3>the course data</h3><br><h4>the code:DSC 315&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the key concepts and techniques in econometrics, including regression analysis, hypothesis testing, and model estimation. Students will learn to apply statistical methods to economic data to analyze relationships and make informed economic forecasts</h4><br><h3>Pre-request Courses</h3><br><h3>Informatics Microeconomics and</h3>'}
    ],
    '🗃الترم السابع🗃': [
        { src: 'images/Hadoop and Apache Spark Essentials.jpeg', label: 'Hadoop and Apache Spark Essentials', customContent: '<h3>the course data</h3><br><h4>the code:DSC 401&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the fundamental concepts and tools of Hadoop and Apache Spark for big data processing. Students will learn about distributed computing, data storage, and processing frameworks, and gain hands-on experience with Hadoop’s ecosystem and Spark’s in-memory processing capabilities</h4><br><h3>Pre-request Courses</h3><br><h3>Introduction to Big Data</h3>'},
        { src: 'images/Information Modelling.jpeg', label: 'Information Modelling', customContent: '<h3>the course data</h3><br><h4>the code:DSC 402&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores techniques for designing and structuring information systems, including data modeling, entity-relationship diagrams, and normalization. Students will learn to create models that accurately represent data and support effective information management and system design</h4><br><h3>Pre-request Courses</h3><br><h3>Data analysis algorithms</h3>'},
        { src: 'images/Knowledgebase Management Systems.jpeg', label: 'Knowledgebase Management Systems', customContent: '<h3>the course data</h3><br><h4>the code:DSC 404&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course focuses on the design, implementation, and management of knowledgebase management systems. Students will explore techniques for organizing, storing, and retrieving knowledge, as well as methods for capturing and leveraging organizational expertise to support decision-making and problem-solving</h4><br><h3>Pre-request Courses</h3><br><h3>Advanced Database</h3>'},
        { src: 'images/Graduation Project 1.jpeg', label: 'Graduation Project 1', customContent: '<h3>the course data</h3><br><h4>the code:COM 400&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course involves the initial phase of a capstone project, where students define, research, and plan their project. Emphasis is placed on developing a project proposal, conducting a literature review, and setting project objectives and milestones to guide the subsequent project work</h4><br><h3>Pre-request Courses</h3><br><h3>Software Projects Management</h3>'},
        { src: 'images/Logistics.jpeg', label: 'Logistics', customContent: '<h3>the course data</h3><br><h4>the code:DSC 317&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the principles and practices of logistics, including supply chain management, transportation, warehousing, and inventory control. Students will learn to optimize the flow of goods and services from suppliers to customers, ensuring efficiency and effectiveness in logistics operations</h4><br><h3>Pre-request Courses</h3><br><h3>System Analysis and Design</h3>'},
        { src: 'images/Legal Basis and IT Law.jpeg', label: 'Legal Basis and IT Law', customContent: '<h3>the course data</h3><br><h4>the code:DSC 318&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the legal frameworks governing information technology, including data protection, intellectual property, and cybersecurity laws. Students will examine legal issues related to IT systems, digital transactions, and compliance requirements, focusing on the intersection of law and technology</h4><br><h3>Pre-request Courses</h3><br><h3>Internet Technology</h3>'},
        { src: 'images/Reinforcement Learning.jpeg', label: 'Reinforcement Learning', customContent: '<h3>the course data</h3><br><h4>the code:DSC 411&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the principles and techniques of reinforcement learning, including algorithms for training agents through interaction with their environment. Students will learn about key concepts such as reward signals, policy optimization, and value functions, and apply these methods to solve complex decision-making problems</h4><br><h3>Pre-request Courses</h3><br><h3>Neural Networks and Deep Learning</h3>'},
        { src: 'images/Data Wrangling.jpeg', label: 'Data Wrangling', customContent: '<h3>the course data</h3><br><h4>the code:DSC 412&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course focuses on the techniques and processes for cleaning, transforming, and preparing data for analysis. Students will learn to handle missing values, normalize data, and merge datasets, ensuring data quality and consistency for effective analysis and decision-making</h4><br><h3>Pre-request Courses</h3><br><h3>Data analysis algorithms</h3>'}
    ],
    '🗃الترم الثامن🗃': [
        { src: 'images/Big Data Analysis.jpeg', label: 'Big Data Analysis', customContent: '<h3>the course data</h3><br><h4>the code:DSC 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores methods and tools for analyzing large-scale datasets, including data mining, statistical analysis, and machine learning techniques. Students will learn to handle and process big data using frameworks like Hadoop and Spark to derive insights and support data-driven decision-making</h4><br><h3>Pre-request Courses</h3><br><h3>Hadoop and Apache Spark essentials</h3>'},
        { src: 'images/Practical Data Science.jpeg', label: 'Practical Data Science', customContent: '<h3>the course data</h3><br><h4>the code:DSC 405&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course focuses on applying data science techniques to real-world problems. Students will work with data collection, cleaning, analysis, and visualization tools to develop actionable insights and solutions. Emphasis is placed on practical applications and project-based learning to build hands-on experience in data science</h4><br><h3>Pre-request Courses</h3><br><h3>Information Modelling</h3>'},
        { src: 'images/Graduation Project 2.jpeg', label: 'Graduation Project 2', customContent: '<h3>the course data</h3><br><h4>the code:COM 498&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course involves the continuation and completion of the capstone project initiated in Graduation Project 1. Students will focus on implementing, testing, and finalizing their projects, preparing a comprehensive report, and presenting their findings. Emphasis is placed on project execution, analysis, and professional presentation</h4><br><h3>Pre-request Courses</h3><br><h3>Graduation project 1</h3>'},
        { src: 'images/Practical Training - 2.jpeg', label: 'Practical Training - 2', customContent: '<h3>the course data</h3><br><h4>the code:COM 499&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course provides hands-on experience in a professional setting, allowing students to apply their academic knowledge to real-world tasks and projects. Students will gain practical skills, industry insights, and experience in their field of study through supervised training and work-based learning</h4><br><h3>Pre-request Courses</h3><br><h3>Level 3</h3>'},
        { src: 'images/Communication and Negotiation Skills.jpeg', label: 'Communication and Negotiation Skills', customContent: '<h3>the course data</h3><br><h4>the code:GEN 312&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course focuses on developing effective communication and negotiation techniques. Students will learn strategies for clear and persuasive communication, conflict resolution, and successful negotiation in both professional and personal contexts. Practical exercises and role-playing will enhance their ability to engage and influence others</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Innovation & Entrepreneurship.jpeg', label: 'Innovation & Entrepreneurship', customContent: '<h3>the course data</h3><br><h4>the code:GEN 316&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course explores the principles and practices of innovation and entrepreneurship, including idea generation, business model development, and startup management. Students will learn to create and evaluate innovative business opportunities and develop strategies for launching and growing new ventures</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Problem Solving & Decision-Making Skills.jpeg', label: 'Problem Solving & Decision-Making Skills', customContent: '<h3>the course data</h3><br><h4>the code:GEN 317&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course focuses on enhancing problem-solving and decision-making abilities through systematic approaches and critical thinking. Students will learn techniques for identifying problems, analyzing options, and making informed decisions to address challenges effectively in various contexts</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'}
    ],
    '📸الترم الخامس📸': [
        { src: 'images/Introduction to Art and Design.jpeg', label: 'Introduction to Art and Design', customContent: '<h3>the course data</h3><br><h4>the code:MMD 301&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course provides an overview of fundamental concepts in art and design, including visual principles, color theory, and composition. Students will explore various artistic mediums and design techniques, developing a foundational understanding of how art and design principles are applied in creative projects</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Web Design.jpeg', label: 'Web Design', customContent: '<h3>the course data</h3><br><h4>the code:MMD 302&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the principles and practices of web design, including layout, typography, color theory, and user experience (UX). Students will learn to design and develop responsive websites using modern web technologies and design tools, focusing on creating visually appealing and user-friendly web interfaces</h4><br><h3>Pre-request Courses</h3><br><h3>System Analysis and Design</h3>'},
        { src: 'images/Foundations of Digital Graphic Design.jpeg', label: 'Foundations of Digital Graphic Design', customContent: '<h3>the course data</h3><br><h4>the code:MMD 303&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the fundamental concepts and techniques of digital graphic design, including visual elements, typography, and color theory. Students will learn to use graphic design software to create digital visuals, focusing on principles of design, composition, and digital media production</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Multimedia Programming.jpeg', label: 'Multimedia Programming', customContent: '<h3>the course data</h3><br><h4>the code:MMD 307&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers programming techniques for creating multimedia applications, including audio, video, graphics, and interactive elements. Students will learn to use programming languages and frameworks to develop multimedia content and applications, focusing on integrating various media types into cohesive digital experiences</h4><br><h3>Pre-request Courses</h3><br><h3>Advanced Programming</h3>'},
        { src: 'images/Selected Topics in Media Arts and Technology.jpeg', label: 'Selected Topics in Media Arts and Technology', customContent: '<h3>the course data</h3><br><h4>the code:MMD 311&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores advanced and emerging topics in media arts and technology, focusing on current trends, innovations, and interdisciplinary approaches. Students will engage with specialized areas such as interactive media, digital storytelling, and emerging technologies, applying theoretical and practical knowledge to innovative projects</h4><br><h3>Pre-request Courses</h3><br><h3>Advanced Programming</h3>'},
        { src: 'images/Introduction to Digital Music.jpeg', label: 'Introduction to Digital Music', customContent: '<h3>the course data</h3><br><h4>the code:MMD 312&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the fundamentals of digital music production, including sound synthesis, digital audio workstations (DAWs), and basic music theory. Students will learn to create, edit, and produce digital music, exploring techniques for composing, recording, and mixing audio in a digital environment</h4><br><h3>Pre-request Courses</h3><br><h3>Advanced Programming</h3>'},
        { src: 'images/Drawing Studio.jpeg', label: 'Drawing Studio', customContent: '<h3>the course data</h3><br><h4>the code:MMD 313&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course provides practical experience in drawing techniques and media, focusing on developing skills in observation, composition, and technique. Students will engage in various drawing exercises and projects, exploring different styles and approaches to enhance their artistic abilities</h4><br><h3>Pre-request Courses</h3><br><h3>Level 2</h3>'}
    ],
    '📸الترم السادس📸': [
        { src: 'images/Multimedia Design.jpeg', label: 'Multimedia Design', customContent: '<h3>the course data</h3><br><h4>the code:MMD 308&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the principles and techniques of multimedia design, including graphics, video, animation, and interactive media. Students will learn to create visually engaging and effective multimedia content using design software and tools, with a focus on integrating various media types into cohesive projects</h4><br><h3>Pre-request Courses</h3><br><h3>Foundations of Digital Graphic Design</h3>' },
        { src: 'images/Computer Aided Design.jpeg', label: 'Computer Aided Design', customContent: '<h3>the course data</h3><br><h4>the code:MMD 309&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the use of computer-aided design (CAD) software for creating detailed and precise technical drawings and models. Students will learn to design, visualize, and modify 2D and 3D models, applying CAD techniques to various fields such as engineering, architecture, and product design</h4><br><h3>Pre-request Courses</h3><br><h3>Foundations of Digital Graphic Design</h3>' },
        { src: 'images/HCI And Applications.jpeg', label: 'HCI And Applications', customContent: '<h3>the course data</h3><br><h4>the code:MMD 306&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores human-computer interaction (HCI) principles and their application in designing user-friendly interfaces and systems. Students will study user experience (UX) design, usability testing, and interactive technologies to create effective and intuitive digital applications</h4><br><h3>Pre-request Courses</h3><br><h3>Multimedia Programming</h3>'},
        { src: 'images/Game Programming.jpeg', label: 'Game Programming', customContent: '<h3>the course data</h3><br><h4>the code:MMD 315&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the principles and techniques of game programming, including game engine fundamentals, graphics rendering, and interactive mechanics. Students will learn to design, develop, and program video games, focusing on creating engaging gameplay experiences and mastering game development tools and technologies</h4><br><h3>Pre-request Courses</h3><br><h3>Computer Networks</h3>'},
        { src: 'images/Visual Communications and Design.jpeg', label: 'Visual Communications and Design', customContent: '<h3>the course data</h3><br><h4>the code:MMD316&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the principles and practices of visual communication and design, including graphic design, visual storytelling, and media aesthetics. Students will learn to create effective visual messages and design solutions using various tools and techniques to convey information and engage audiences</h4><br><h3>Pre-request Courses</h3><br><h3>Signal and systems</h3>'},
        { src: 'images/The Mass Media.jpeg', label: 'The Mass Media', customContent: '<h3>the course data</h3><br><h4>the code:MMD 317&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course examines the role and impact of mass media in society, including print, broadcast, and digital media. Students will explore media history, media effects, and current trends, analyzing how mass media influences public opinion, culture, and communication</h4><br><h3>Pre-request Courses</h3><br><h3>Virtual reality</h3>'},
        { src: 'images/Communication and Negotiation Skills.jpeg', label: 'Communication and Negotiation Skills', customContent: '<h3>the course data</h3><br><h4>the code:GEN 312&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course focuses on developing effective communication and negotiation skills. Students will learn techniques for clear and persuasive dialogue, conflict resolution, and strategic negotiation, applying these skills in both professional and personal contexts to achieve successful outcomes</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Innovation & Entrepreneurship.jpeg', label: 'Innovation & Entrepreneurship', customContent: '<h3>the course data</h3><br><h4>the code:GEN 316&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course explores the processes and strategies involved in innovation and entrepreneurship. Students will learn to identify and develop innovative business ideas, create business models, and manage startup ventures, with a focus on fostering creativity, risk management, and strategic growth</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
        { src: 'images/Problem Solving & Decision-Making Skills.jpeg', label: 'Problem Solving & Decision-Making Skills', customContent: '<h3>the course data</h3><br><h4>the code:GEN 317&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course enhances problem-solving and decision-making abilities through systematic approaches and analytical techniques. Students will learn methods for identifying problems, evaluating alternatives, and making informed decisions to address complex challenges effectively</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'}
    ],
    '📸الترم السابع📸': [
        { src: 'images/Advanced Multimedia Programming.jpeg', label: 'Advanced Multimedia Programming', customContent: '<h3>the course data</h3><br><h4>the code:MMD 410&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course delves into advanced techniques in multimedia programming, including real-time graphics, complex audio processing, and interactive media applications. Students will build on foundational skills to develop sophisticated multimedia projects using modern programming languages and frameworks</h4><br><h3>Pre-request Courses</h3><br><h3>Multimedia Programming</h3>'},
        { src: 'images/Digital Photography and Media Production.jpeg', label: 'Digital Photography and Media Production', customContent: '<h3>the course data</h3><br><h4>the code:MMD 402&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the fundamentals of digital photography and media production, including camera techniques, image editing, and media storytelling. Students will learn to capture, edit, and produce high-quality digital images and media content, focusing on both technical skills and creative expression</h4><br><h3>Pre-request Courses</h3><br><h3>Computer Aided Design</h3>'},
        { src: 'images/Introduction to 2D Animation.jpeg', label: 'Introduction to 2D Animation', customContent: '<h3>the course data</h3><br><h4>the code:MMD 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the principles and techniques of 2D animation, including keyframing, motion paths, and character design. Students will learn to create and animate 2D characters and scenes using animation software, focusing on fundamental animation principles and storytelling techniques</h4><br><h3>Pre-request Courses</h3><br><h3>Computer Aided Design</h3>'},
        { src: 'images/Graduation Project 1.jpeg', label: 'Graduation Project 1', customContent: '<h3>the course data</h3><br><h4>the code:COM 400&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/6</h4><br><h3>Course description</h3><br><h4>This course involves the initial phase of a capstone project where students define, research, and plan their project. Emphasis is placed on developing a project proposal, conducting a literature review, and setting clear objectives and milestones for the projects execution</h4><br><h3>Pre-request Courses</h3><br><h3>System analysis and design</h3>'},
        { src: 'images/Visual Effects, Compositing and Mixed Media.jpeg', label: 'Visual Effects, Compositing and Mixed Media', customContent: '<h3>the course data</h3><br><h4>the code:MMD 413&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers techniques in visual effects, compositing, and mixed media. Students will learn to integrate visual effects with live-action footage, create composite images, and blend various media types to produce seamless and engaging multimedia content</h4><br><h3>Pre-request Courses</h3><br><h3>Visual Communications and Design</h3>'},
        { src: 'images/Introduction to Video Graphics.jpeg', label: 'Introduction to Video Graphics', customContent: '<h3>the course data</h3><br><h4>the code:MMD 414&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the fundamentals of video graphics, including motion graphics, visual effects, and animation techniques. Students will learn to create and integrate graphical elements into video projects, using software tools to enhance visual storytelling and production quality</h4><br><h3>Pre-request Courses</h3><br><h3>Computer Aided Design</h3>'}
    ],
    '📸الترم الثامن📸': [
        { src: 'images/Introduction to 3D Modeling and Animation.jpeg', label: 'Introduction to 3D Modeling and Animation', customContent: '<h3>the course data</h3><br><h4>the code:MMD 404&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the basics of 3D modeling and animation, including creating and texturing 3D models, setting up animations, and rendering. Students will learn to use 3D software to build and animate digital objects and characters, focusing on fundamental techniques and principles</h4><br><h3>Pre-request Courses</h3><br><h3>Computer Aided Design</h3>'},
        { src: 'images/Typography and Layout.jpeg', label: 'Typography and Layout', customContent: '<h3>the course data</h3><br><h4>the code:MMD 407&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the principles of typography and layout design, focusing on font selection, text formatting, and visual composition. Students will learn to create effective and aesthetically pleasing layouts for print and digital media, emphasizing readability and visual hierarchy</h4><br><h3>Pre-request Courses</h3><br><h3>Digital Photography and Media Production</h3>'},
        { src: 'images/Image And Video Processing.jpeg', label: 'Image And Video Processing', customContent: '<h3>the course data</h3><br><h4>the code:MMD 408&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers techniques and algorithms for image and video processing, including image enhancement, filtering, and motion detection. Students will learn to manipulate and analyze visual data using various software tools, focusing on practical applications and advanced processing methods</h4><br><h3>Pre-request Courses</h3><br><h3>Digital Photography and Media Production</h3>'},
        { src: 'images/Virtual Reality and Tele-Presence.jpeg', label: 'Virtual Reality and Tele-Presence', customContent: '<h3>the course data</h3><br><h4>the code:MMD 409&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the technologies and applications of virtual reality (VR) and tele-presence. Students will learn to design and develop immersive VR environments and tele-presence systems, focusing on user experience, interaction techniques, and practical implementations for various industries</h4><br><h3>Pre-request Courses</h3><br><h3>Digital Photography and Media Production</h3>'},
        { src: 'images/Graduation Project 2.jpeg', label: 'Graduation Project 2', customContent: '<h3>the course data</h3><br><h4>the code:COM 498&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/6</h4><br><h3>Course description</h3><br><h4>This course involves the final phase of the capstone project, where students complete and present their projects. Emphasis is on implementing solutions, conducting thorough analysis, and preparing a detailed report and presentation to showcase the results and insights gained from the project</h4><br><h3>Pre-request Courses</h3><br><h3>Graduation project 1</h3>'},
        { src: 'images/Practical Training - 2.jpeg', label: 'Practical Training - 2', customContent: '<h3>the course data</h3><br><h4>the code:COM 499&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br>This course provides advanced hands-on experience in a professional setting, allowing students to apply their skills to real-world tasks and projects. Students will gain practical insights and further develop their expertise through supervised training, focusing on advanced techniques and industry-specific practices<h4></h4><br><h3>Pre-request Courses</h3><br><h3>Level 3</h3>'}
    ],
    '🤖الترم الخامس🤖': [
        { src: 'images/Pattern Recognition.jpeg', label: 'Pattern Recognition', customContent: '<h3>the course data</h3><br><h4>the code:ROB 301&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the methods and algorithms used in pattern recognition, including classification, clustering, and feature extraction. Students will learn to develop and apply techniques for identifying patterns and making predictions based on data, with applications in various fields such as machine learning and data analysis</h4><br><h3>Pre-request Courses</h3><br><h3>Algorithms</h3>'},
        { src: 'images/Real-Time Systems.jpeg', label: 'Real-Time Systems', customContent: '<h3>the course data</h3><br><h4>the code:ROB 302&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the design and implementation of real-time systems, focusing on managing time constraints and ensuring timely responses. Students will learn about scheduling algorithms, real-time operating systems, and the challenges of developing systems that meet strict timing requirements for applications in various domains</h4><br><h3>Pre-request Courses</h3><br><h3>Operating Systems</h3>'},
        { src: 'images/Micro Processors.jpeg', label: 'Micro Processors', customContent: '<h3>the course data</h3><br><h4>the code:ROB 303&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course provides an overview of microprocessor architecture and operations, including instruction sets, interfacing, and programming. Students will learn to design and implement microprocessor-based systems, focusing on the integration of hardware and software to create functional and efficient computing solutions</h4><br><h3>Pre-request Courses</h3><br><h3>Logic Design</h3>'},
        { src: 'images/Computer Architecture.jpeg', label: 'Computer Architecture', customContent: '<h3>the course data</h3><br><h4>the code:ROB 304&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the fundamental principles of computer architecture, including processor design, memory hierarchy, and input/output systems. Students will learn about the internal structure and operation of computers, focusing on how hardware components interact to execute instructions and perform computing tasks</h4><br><h3>Pre-request Courses</h3><br><h3>Operating Systems</h3>'},
        { src: 'images/Machine Learning.jpeg', label: 'Machine Learning', customContent: '<h3>the course data</h3><br><h4>the code:ROB 305&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the concepts and algorithms of machine learning, including supervised, unsupervised, and reinforcement learning. Students will learn to develop and apply machine learning models using data to make predictions, identify patterns, and solve complex problems across various domains</h4><br><h3>Pre-request Courses</h3><br><h3>Discrete Mathematics</h3>'},
        { src: 'images/Robotics Selected Topics.jpeg', label: 'Robotics Selected Topics', customContent: '<h3>the course data</h3><br><h4>the code:ROB 311&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores advanced and specialized topics in robotics, including robotics algorithms, sensor integration, and autonomous systems. Students will delve into current trends and research areas, applying theoretical knowledge to practical robotics challenges and projects</h4><br><h3>Pre-request Courses</h3><br><h3>Level 2</h3>'},
        { src: 'images/Virtual Reality.jpeg', label: 'Virtual Reality', customContent: '<h3>the course data</h3><br><h4>the code:ROB 312&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the fundamentals of virtual reality (VR), including VR hardware, software development, and immersive experience design. Students will learn to create and interact with virtual environments, focusing on VR technologies, user interfaces, and applications across various industries</h4><br><h3>Pre-request Courses</h3><br><h3>Artificial Intelligence</h3>'}
    ],
    '🤖الترم السادس🤖': [
        { src: 'images/Neural Networks.jpeg', label: 'Neural Networks', customContent: '<h3>the course data</h3><br><h4>the code:ROB 306&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the fundamentals of neural networks, including their architecture, training methods, and applications. Students will learn about various types of neural networks, such as feedforward and convolutional networks, and develop skills in designing and implementing neural network models for solving complex problems</h4><br><h3>Pre-request Courses</h3><br><h3>Algorithms</h3>'},
        { src: 'images/Parallel Processing.jpeg', label: 'Parallel Processing', customContent: '<h3>the course data</h3><br><h4>the code:ROB 307&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course examines parallel processing techniques and architectures, focusing on how to execute multiple processes simultaneously to improve computational efficiency. Students will learn about parallel algorithms, multi-core processors, and distributed computing, applying these concepts to optimize performance in various applications</h4><br><h3>Pre-request Courses</h3><br><h3>Real-time operating systems</h3>'},
        { src: 'images/Automatic Control.jpeg', label: 'Automatic Control', customContent: '<h3>the course data</h3><br><h4>the code:ROB 308&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the principles and techniques of automatic control systems, including feedback loops, control theory, and system stability. Students will learn to design and analyze control systems for various applications, focusing on automating processes and improving system performance and reliability</h4><br><h3>Pre-request Courses</h3><br><h3>Operating Systems</h3>'},
        { src: 'images/Embedded Systems.jpeg', label: 'Embedded Systems', customContent: '<h3>the course data</h3><br><h4>the code:ROB 310&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course focuses on the design and implementation of embedded systems, including microcontrollers, hardware interfaces, and real-time operating systems. Students will learn to develop and integrate embedded systems for specific applications, emphasizing practical skills in both hardware and software development</h4><br><h3>Pre-request Courses</h3><br><h3>Computer Architecture</h3>'},
        { src: 'images/Computer Networks and Information Security.jpeg', label: 'Computer Networks and Information Security', customContent: '<h3>the course data</h3><br><h4>the code:ROB 313&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the principles of computer networks and information security, including network architectures, protocols, and security measures. Students will learn to design and secure network systems, focusing on protecting data integrity, confidentiality, and availability from various cyber threats</h4><br><h3>Pre-request Courses</h3><br><h3>Computer Networks</h3>'},
        { src: 'images/Digital Signal Processing.jpeg', label: 'Digital Signal Processing', customContent: '<h3>the course data</h3><br><h4>the code:ROB 415&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the fundamentals of digital signal processing (DSP), including signal representation, filtering, and transformation techniques. Students will learn to analyze and process digital signals using algorithms and software tools, focusing on applications in audio, image, and communication systems</h4><br><h3>Pre-request Courses</h3><br><h3>Signal and systems</h3>'},
        { src: 'images/Computer Vision.jpeg', label: 'Computer Vision', customContent: '<h3>the course data</h3><br><h4>the code:ROB 411&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the principles and techniques of computer vision, including image processing, object detection, and pattern recognition. Students will learn to develop algorithms and systems that enable computers to interpret and analyze visual information from the world, applying these techniques to real-world applications</h4><br><h3>Pre-request Courses</h3><br><h3>Virtual reality</h3>'},
        { src: 'images/Speech Processing.jpeg', label: 'Speech Processing', customContent: '<h3>the course data</h3><br><h4>the code:ROB 413&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the fundamentals of speech processing, including speech signal analysis, synthesis, and recognition. Students will learn techniques for extracting and manipulating speech features, developing applications such as speech recognition systems and text-to-speech converters, and understanding the underlying algorithms and models</h4><br><h3>Pre-request Courses</h3><br><h3>Natural Language Processing</h3>'}
    ],
    '🤖الترم السابع🤖': [
        { src: 'images/Robot Design.jpeg', label: 'Robot Design', customContent: '<h3>the course data</h3><br><h4>the code:ROB 401&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course focuses on the principles and practices of robot design, including mechanical structure, control systems, and sensor integration. Students will learn to design and build robotic systems, applying concepts from kinematics, dynamics, and automation to create functional and efficient robots</h4><br><h3>Pre-request Courses</h3><br><h3>Micro Processors</h3>'},
        { src: 'images/Robot Arms.jpeg', label: 'Robot Arms', customContent: '<h3>the course data</h3><br><h4>the code:ROB 402&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course delves into the design, control, and application of robotic arms. Students will learn about the kinematics, dynamics, and control algorithms essential for operating robotic arms, focusing on their mechanical design, sensor integration, and programming for various industrial and research applications</h4><br><h3>Pre-request Courses</h3><br><h3>Embedded Systems</h3>'},
        { src: 'images/Natural Language Processing.jpeg', label: 'Natural Language Processing', customContent: '<h3>the course data</h3><br><h4>the code:ROB 405&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the fundamentals of natural language processing (NLP), including text analysis, language modeling, and machine learning techniques. Students will learn to develop algorithms and applications for processing and understanding human language, focusing on tasks such as text classification, sentiment analysis, and language generation</h4><br><h3>Pre-request Courses</h3><br><h3>Neural Networks</h3>'},
        { src: 'images/Graduation Project 1.jpeg', label: 'Graduation Project 1', customContent: '<h3>the course data</h3><br><h4>the code:COM 400&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/6</h4><br><h3>Course description</h3><br><h4>This course involves the initial phase of the graduation project, where students define their project scope, conduct preliminary research, and develop a project proposal. Emphasis is placed on setting objectives, creating a detailed plan, and preparing for the implementation phase in the subsequent course</h4><br><h3>Pre-request Courses</h3><br><h3>System analysis and design</h3>'},
        { src: 'images/Computer Networks and Information Security.jpeg', label: 'Computer Networks and Information Security', customContent: '<h3>the course data</h3><br><h4>the code:ROB 313&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the fundamentals of computer networks and information security. Students will learn about network architecture, protocols, and security practices to protect data and systems. Emphasis is placed on understanding network design, implementing security measures, and addressing cyber threats to ensure data integrity and privacy</h4><br><h3>Pre-request Courses</h3><br><h3>Computer Networks</h3>'},
        { src: 'images/Digital Signal Processing.jpeg', label: 'Digital Signal Processing', customContent: '<h3>the course data</h3><br><h4>the code:ROB 415&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course introduces the principles and techniques of digital signal processing (DSP), including signal representation, filtering, and spectral analysis. Students will gain hands-on experience with DSP algorithms and applications in areas such as audio, image, and communication systems, using software tools and practical exercises</h4><br><h3>Pre-request Courses</h3><br><h3>Signal and systems</h3>'},
        { src: 'images/Computer Vision.jpeg', label: 'Computer Vision', customContent: '<h3>the course data</h3><br><h4>the code:ROB 411&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores computer vision techniques and applications, including image processing, object detection, and feature extraction. Students will learn to develop and implement algorithms that enable computers to interpret and analyze visual data, with a focus on real-world applications such as facial recognition, autonomous vehicles, and augmented reality</h4><br><h3>Pre-request Courses</h3><br><h3>Virtual reality</h3>'},
        { src: 'images/Speech Processing.jpeg', label: 'Speech Processing', customContent: '<h3>the course data</h3><br><h4>the code:ROB 413&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course explores the techniques and algorithms used in speech processing, including speech recognition, synthesis, and analysis. Students will learn to process and analyze speech signals, develop applications like speech-to-text systems, and understand the underlying models and methods used in modern speech technology</h4><br><h3>Pre-request Courses</h3><br><h3>Natural Language Processing</h3>'}
    ],
  '🤖الترم الثامن🤖': [
    { src: 'images/Sensors and Actuators.jpeg', label: 'Sensors and Actuators', customContent: '<h3>the course data</h3><br><h4>the code:ROB 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course covers the principles and applications of sensors and actuators in various systems. Students will learn about different types of sensors and actuators, their operation, and how they are used to collect data and control physical processes. Emphasis is placed on integration and practical applications in automation and robotics</h4><br><h3>Pre-request Courses</h3><br><h3>Computer Architecture</h3>'},
    { src: 'images/Mobile Robots.jpeg', label: 'Mobile Robots', customContent: '<h3>the course data</h3><br><h4>the code:ROB 404&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course focuses on the design, control, and navigation of mobile robots. Students will explore topics such as locomotion mechanisms, path planning, and sensor integration. The course emphasizes practical skills in developing autonomous mobile robots capable of navigating and performing tasks in various environments</h4><br><h3>Pre-request Courses</h3><br><h3>Robot design</h3>'},
    { src: 'images/Graduation Project 2.jpeg', label: 'Graduation Project 2', customContent: '<h3>the course data</h3><br><h4>the code:COM 498&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/2</h4><br><h3>Course description</h3><br><h4>This course involves the final stage of the graduation project, where students complete their projects, conduct detailed analysis, and prepare a comprehensive report and presentation. Emphasis is placed on refining the project, demonstrating results, and showcasing the work through a final presentation to evaluate the overall achievements and insights</h4><br><h3>Pre-request Courses</h3><br><h3>Graduation project 1</h3>'},
    { src: 'images/Practical Training - 2.jpeg', label: 'Practical Training - 2', customContent: '<h3>the course data</h3><br><h4>the code:COM 499&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/6</h4><br><h3>Course description</h3><br><h4>This course provides advanced hands-on experience in a professional setting, allowing students to apply their skills to complex tasks and projects. Students will gain deeper insights and practical experience through supervised training, focusing on advanced techniques and real-world problem-solving in their field</h4><br><h3>Pre-request Courses</h3><br><h3>Level 3</h3>'},
    { src: 'images/Communication and Negotiation Skills.jpeg', label: 'Communication and Negotiation Skills', customContent: '<h3>the course data</h3><br><h4>the code:GEN 312&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course focuses on developing effective communication and negotiation skills. Students will learn techniques for clear and persuasive communication, conflict resolution, and strategic negotiation. Emphasis is placed on practical exercises and role-playing to enhance interpersonal skills and achieve successful outcomes in various professional contexts</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
    { src: 'images/Innovation & Entrepreneurship.jpeg', label: 'Innovation & Entrepreneurship', customContent: '<h3>the course data</h3><br><h4>the code:GEN 316&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course explores the principles of innovation and entrepreneurship, including idea generation, business planning, and startup management. Students will learn to identify opportunities, develop innovative solutions, and create viable business models, with a focus on practical skills for launching and growing new ventures</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'},
    { src: 'images/Problem Solving & Decision-Making Skills.jpeg', label: 'Problem Solving & Decision-Making Skills', customContent: '<h3>the course data</h3><br><h4>the code:GEN 317&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:3</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>This course focuses on enhancing problem-solving and decision-making abilities. Students will learn techniques for analyzing complex issues, evaluating options, and making informed decisions. Emphasis is placed on practical approaches, critical thinking, and applying structured methods to solve problems effectively in various scenarios</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required</h3>'}
]}

/**************************************************
 * REPLACE your existing script.js with this file *
 **************************************************/

// --------------------------
// Setup Supabase Client
// --------------------------

/*********************************************************
  Check if user is logged in at page load.
  If not, redirect to index.html
 *********************************************************/
window.addEventListener('DOMContentLoaded', async () => {
  const userID = localStorage.getItem('userID')
  if (!userID) {
    // Not logged in, go back to login
    window.location.href = 'index.html'
    return
  }

  // Next, fetch this user’s row from the “users” table
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userID)
    .single()

  if (error || !data) {
    // Couldn’t find user row in DB => force re-login
    localStorage.clear()
    window.location.href = 'index.html'
    return
  }

  // Save user row data in localStorage for quick reference
  // Use JSON as needed for name/gpa/year/etc.
  localStorage.setItem('userName', data.name || '')
  localStorage.setItem('userGpa', data.gpa || '')
  localStorage.setItem('userYear', data.year || '')
  localStorage.setItem('userGmail', data.gmail || '')
  localStorage.setItem('userCourses', data.course || '')

  // Set circle’s letter
  const userCircle = document.getElementById('userCircle')
  userCircle.textContent = (data.name && data.name.length > 0)
    ? data.name.charAt(0).toUpperCase()
    : 'U'
})

// --------------------------
// User Info Panel
// --------------------------
const userCircle = document.getElementById('userCircle')
const userInfoPanel = document.getElementById('userInfoPanel')

userCircle.addEventListener('click', () => {
  // Toggle
  if (userInfoPanel.style.display === 'none' || !userInfoPanel.style.display) {
    userInfoPanel.style.display = 'block'
    updateUserInfoPanel()
  } else {
    userInfoPanel.style.display = 'none'
  }
})

function updateUserInfoPanel() {
  const userNameDisplay = document.getElementById('userNameDisplay')
  const userCoursesList = document.getElementById('userCoursesList')
  const userGpa = document.getElementById('userGpa')
  const userYear = document.getElementById('userYear')
  const userGmail = document.getElementById('userGmail')
  //const userPass = document.getElementById('userPass') // if you want to show password

  userNameDisplay.textContent = localStorage.getItem('userName') || 'No Name'
  userGpa.textContent = 'GPA: ' + (localStorage.getItem('userGpa') || 'Not set')
  userYear.textContent = 'Year: ' + (localStorage.getItem('userYear') || 'Not set')
  userGmail.textContent = 'Gmail: ' + (localStorage.getItem('userGmail') || 'Not set')
  //userPass.textContent = 'Password: ???'  // Not storing in localStorage is safer

  // Show courses
  const coursesCSV = localStorage.getItem('userCourses') || ''
  const coursesArr = coursesCSV ? coursesCSV.split(',') : []
  userCoursesList.innerHTML = ''
  coursesArr.forEach(c => {
    if (!c) return
    const li = document.createElement('li')
    li.textContent = c
    userCoursesList.appendChild(li)
  })
}

// --------------------------
// Logout
// --------------------------
window.handleLogout = function() {
  localStorage.clear()
  window.location.href = 'index.html'
}

// --------------------------
// Big filter arrays
// --------------------------
/* 
  RE-INSERT your large arrays here (box1Filters, box2Filters, contentItems, etc.).
  We'll skip them for brevity, but you must place them back to make everything run.
*/

// Some minimal placeholders just so code won’t break:

// --------------------------
// Filter Logic
// --------------------------
let activeFilters = []
let activeCircleFilters = []

window.selectFilter = function(filterName) {
  if (Object.keys(box1Filters).includes(filterName)) {
    // Box1 filter
    const previousBox1Filter = activeFilters.find(f => Object.keys(box1Filters).includes(f))
    if (previousBox1Filter) {
      removeFilter(previousBox1Filter)
    }
    if (!activeFilters.includes(filterName)) {
      activeFilters.push(filterName)
    }
    updateSelectedFilterBox()
    updateBox2(filterName)
  } else {
    // Box2 filter
    if (!activeFilters.includes(filterName)) {
      activeFilters.push(filterName)
    } else {
      activeFilters = activeFilters.filter(f => f !== filterName)
    }
    updateSelectedFilterBox()
  }
  updateContentArea()
}

window.selectCircleFilter = function(color) {
  if (!activeCircleFilters.includes(color)) {
    activeCircleFilters.push(color)
  } else {
    activeCircleFilters = activeCircleFilters.filter(c => c !== color)
  }
  updateSelectedFilterBox()
  updateContentArea()
}

window.removeFilter = function(filterName) {
  if (Object.keys(box1Filters).includes(filterName)) {
    activeFilters = activeFilters.filter(f => !box2Filters[filterName]?.includes(f))
  }
  activeFilters = activeFilters.filter(f => f !== filterName)
  updateSelectedFilterBox()
  updateContentArea()
  updateBox2()
}

function isBox1FilterActive() {
  return activeFilters.some(f => Object.keys(box1Filters).includes(f))
}

function updateBox2() {
  const filterArea2 = document.querySelector('.filter-area-2')
  filterArea2.innerHTML = ''
  if (!isBox1FilterActive()) {
    filterArea2.innerHTML = '<p style="font-size: 16px; padding: 5px; border: 1px solid #000;">اختر من الأقسام من الأعلى</p>'
  } else {
    const activeBox1Filter = activeFilters.find(f => Object.keys(box1Filters).includes(f))
    if (activeBox1Filter && box2Filters[activeBox1Filter]) {
      box2Filters[activeBox1Filter].forEach(btnName => {
        const button = document.createElement('button')
        button.classList.add('filter-button')
        button.textContent = btnName
        button.style.width = '100%'
        button.onclick = () => selectFilter(btnName)
        if (activeFilters.includes(btnName)) {
          button.style.backgroundColor = '#1e7e34'
        }
        filterArea2.appendChild(button)
      })
    }
  }
}

function updateSelectedFilterBox() {
  const selectedFilterBox = document.getElementById('selected-filter-content')
  selectedFilterBox.innerHTML = ''
  if (activeFilters.length === 0 && activeCircleFilters.length === 0) {
    selectedFilterBox.innerHTML = '<p style="font-size: 20px; padding: 5px; border: 1px solid #000;">ليس هناك أي مرشح مضاف</p>'
  } else {
    activeFilters.forEach(filterName => {
      const filterText = box1Filters[filterName] || filterName
      const filterItem = document.createElement('div')
      filterItem.classList.add('selected-filter-item')
      filterItem.innerHTML = `
        <span>${filterText}</span>
        <button class="filter-clear-button" onclick="removeFilter('${filterName}')">X</button>
      `
      selectedFilterBox.appendChild(filterItem)
    })
    activeCircleFilters.forEach(color => {
      const filterItem = document.createElement('div')
      filterItem.classList.add('selected-filter-item')
      const circleIcon = document.createElement('div')
      circleIcon.classList.add('circle-icon', color)
      circleIcon.style.marginRight = '5px'
      filterItem.appendChild(circleIcon)
      const colorLabels = {
        'green': 'يدرس',
        'yellow': 'قادم',
        'red': 'ملغى'
      }
      const filterText = document.createElement('span')
      filterText.textContent = colorLabels[color]
      filterItem.appendChild(filterText)
      const removeButton = document.createElement('button')
      removeButton.classList.add('filter-clear-button')
      removeButton.textContent = 'X'
      removeButton.onclick = () => {
        selectCircleFilter(color)
      }
      filterItem.appendChild(removeButton)
      selectedFilterBox.appendChild(filterItem)
    })
    // "Clear All" button
    const clearAllButton = document.createElement('button')
    clearAllButton.textContent = 'مسح الكل'
    clearAllButton.classList.add('clear-all-button')
    clearAllButton.onclick = clearAllFilters
    selectedFilterBox.appendChild(clearAllButton)
  }
}

window.clearAllFilters = function() {
  activeFilters = []
  activeCircleFilters = []
  updateSelectedFilterBox()
  updateContentArea()
  updateBox2()
}

// Keep track of the CURRENT course label for the modal
let currentCourseLabel = null

function showModal(imageSrc, label, customContent) {
  const modal = document.getElementById('imageModal')
  const modalImage = document.getElementById('modalImage')
  const modalCustomContent = document.getElementById('modalCustomContent')
  const addBtn = document.getElementById('addCourseBtn')
  const removeBtn = document.getElementById('removeCourseBtn')

  modalImage.src = imageSrc
  modalCustomContent.innerHTML = `<p style="margin: 10px; font-size: 18px;">${label}</p><div>${customContent}</div>`
  modal.style.display = 'flex'
  currentCourseLabel = label

  // Now we decide whether to show/hide Add or Remove buttons
  const userCoursesCSV = localStorage.getItem('userCourses') || ''
  const userCoursesArr = userCoursesCSV ? userCoursesCSV.split(',') : []
  if (userCoursesArr.includes(label)) {
    // We have it => only show Remove
    addBtn.style.display = 'none'
    removeBtn.style.display = 'inline-block'
  } else {
    // We don’t have it => only show Add
    addBtn.style.display = 'inline-block'
    removeBtn.style.display = 'none'
  }
}

window.closeModal = function() {
  document.getElementById('imageModal').style.display = 'none'
  currentCourseLabel = null
}

document.getElementById('imageModal').addEventListener('click', (e) => {
  if (e.target.id === 'imageModal') {
    closeModal()
  }
})

// Wire Add/Remove course
document.getElementById('addCourseBtn').addEventListener('click', async () => {
  if (!currentCourseLabel) return
  const userID = localStorage.getItem('userID')
  if (!userID) return alert("No logged-in user found.")

  // Retrieve user row
  const { data: userData, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userID)
    .single()

  if (error || !userData) {
    alert("Could not retrieve user data.")
    return
  }
  // userData.course is a CSV
  let existingCourses = []
  if (userData.course) {
    existingCourses = userData.course.split(',')
  }
  // push if not present
  if (!existingCourses.includes(currentCourseLabel)) {
    existingCourses.push(currentCourseLabel)
  }
  const updated = existingCourses.join(',')
  const { error: upErr } = await supabase
    .from('users')
    .update({ course: updated })
    .eq('id', userID)
  if (upErr) {
    alert("Error adding course: " + upErr.message)
  } else {
    // Update localStorage
    localStorage.setItem('userCourses', updated)
    alert("Course added!")
    updateUserInfoPanel()
    // Hide modal
    closeModal()
  }
})

document.getElementById('removeCourseBtn').addEventListener('click', async () => {
  if (!currentCourseLabel) return
  const userID = localStorage.getItem('userID')
  if (!userID) return alert("No logged-in user found.")

  const { data: userData, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userID)
    .single()

  if (error || !userData) {
    alert("Could not retrieve user data.")
    return
  }
  let existing = []
  if (userData.course) {
    existing = userData.course.split(',')
  }
  existing = existing.filter(c => c !== currentCourseLabel)
  const updated = existing.join(',')
  const { error: upErr } = await supabase
    .from('users')
    .update({ course: updated })
    .eq('id', userID)
  if (upErr) {
    alert("Error removing course: " + upErr.message)
  } else {
    localStorage.setItem('userCourses', updated)
    alert("Course removed!")
    updateUserInfoPanel()
    closeModal()
  }
})

// --------------------------
// Generate the content
// --------------------------
function updateContentArea(searchTerm = '') {
  const contentArea = document.getElementById('content-area')
  contentArea.innerHTML = ''

  const box1Filter = activeFilters.find(f => Object.keys(box1Filters).includes(f))
  const box2FiltersActive = activeFilters.filter(f => !Object.keys(box1Filters).includes(f))
  let imagesToDisplay = []

  if (box2FiltersActive.length > 0) {
    // Collect images for active Box2 filters only
    box2FiltersActive.forEach(filter => {
      const images = contentItems[filter] || []
      images.forEach(item => imagesToDisplay.push(item))
    })
  } else if (box1Filter) {
    // Collect all Box2 images for that box1
    const b2Names = box2Filters[box1Filter] || []
    b2Names.forEach(f => {
      const images = contentItems[f] || []
      images.forEach(item => imagesToDisplay.push(item))
    })
  } else {
    // No filters => show all
    Object.keys(contentItems).forEach(category => {
      contentItems[category].forEach(item => imagesToDisplay.push(item))
    })
  }

  // Filter by circle colors if needed
  if (activeCircleFilters.length > 0) {
    imagesToDisplay = imagesToDisplay.filter(it => activeCircleFilters.includes(it.color))
  }

  // If searching
  if (searchTerm !== '') {
    imagesToDisplay = imagesToDisplay.filter(item =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  // Remove duplicates by label
  const uniqueLabels = new Set()
  imagesToDisplay = imagesToDisplay.filter(item => {
    if (uniqueLabels.has(item.label)) return false
    uniqueLabels.add(item.label)
    return true
  })

  // Display
  imagesToDisplay.forEach(item => {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('image-container', 'fade-in')

    const imgElement = document.createElement('img')
    imgElement.src = item.src
    imgElement.classList.add('content-image')

    const label = document.createElement('div')
    label.classList.add('image-label')
    label.textContent = item.label

    const circleIndicator = document.createElement('div')
    circleIndicator.classList.add('circle-indicator', item.color)

    // “+” button
    const plusButton = document.createElement('button')
    plusButton.classList.add('plus-button')
    plusButton.innerHTML = '+'
    // If user clicks plus, open modal
    plusButton.onclick = (event) => {
      event.stopPropagation()
      showModal(item.src, item.label, item.customContent)
    }
    // If user clicks container
    imgContainer.onclick = () => showModal(item.src, item.label, item.customContent)

    imgContainer.appendChild(imgElement)
    imgContainer.appendChild(label)
    imgContainer.appendChild(circleIndicator)
    imgContainer.appendChild(plusButton)
    contentArea.appendChild(imgContainer)
  })
}

document.getElementById('search-bar').addEventListener('input', (e) => {
  updateContentArea(e.target.value)
})

function initPage() {
  updateBox2()
  updateSelectedFilterBox()
  updateContentArea()
}
initPage()