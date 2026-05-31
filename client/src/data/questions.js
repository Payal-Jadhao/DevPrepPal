const questions = [
  // ============================
  // 🧠 Operating Systems (OS)
  // ============================

  {
    subject: "OS",
    question: "Which scheduling algorithm is non-preemptive?",
    options: ["Round Robin", "SJF", "FCFS", "Priority"],
    answer: 2
  },
  {
    subject: "OS",
    question: "What is a page fault?",
    options: [
      "A corrupted page in memory",
      "Accessing a page not in main memory",
      "A hardware failure",
      "An illegal memory access"
    ],
    answer: 1
  },
  {
    subject: "OS",
    question: "Which of these is used for deadlock prevention?",
    options: [
      "Banker’s Algorithm",
      "Wait-Die Scheme",
      "Resource Allocation Graph",
      "All of the above"
    ],
    answer: 3
  },
  {
        subject: "OS",
        question: "What is a process in an operating system?",
        options: [
            "A hardware component",
            "A running instance of a program",
            "A data packet in memory",
            "A type of file system"
        ],
        answer: 1
    },
    {
        subject: "OS",
        question: "Which is NOT a process state?",
        options: [
            "Running",
            "Ready",
            "Waiting",
            "Executing and Terminated"
        ],
        answer: 3
    },
    {
        subject: "OS",
        question: "What is a thread?",
        options: [
            "A unit of file storage",
            "An independent OS",
            "A single sequence stream within a process",
            "A type of scheduling"
        ],
        answer: 2
    },
    {
        subject: "OS",
        question: "How does a thread differ from a process?",
        options: [
            "Threads have their own memory space",
            "Threads share memory space within a process",
            "Threads cannot run independently",
            "Threads are slower than processes"
        ],
        answer: 1
    },
    {
        subject: "OS",
        question: "What is one benefit of multithreaded programming?",
        options: [
            "Larger memory usage",
            "Lower CPU utilization",
            "Improved responsiveness and resource sharing",
            "Slower I/O processing"
        ],
        answer: 2
    },
    {
        subject: "OS",
        question: "What is thrashing?",
        options: [
            "High CPU usage",
            "Disk failure",
            "Excessive paging reducing performance",
            "Slow booting process"
        ],
        answer: 2
    },
    {
        subject: "OS",
        question: "What is a buffer in OS?",
        options: [
            "A type of scheduling",
            "A CPU register",
            "Memory area for temporary data storage",
            "A page fault handler"
        ],
        answer: 2
    },
    {
        subject: "OS",
        question: "What does virtual memory do?",
        options: [
            "Manages physical disks",
            "Extends RAM using disk space",
            "Increases GPU speed",
            "Eliminates need for RAM"
        ],
        answer: 1
    },
    {
        subject: "OS",
        question: "What is the main purpose of an operating system?",
        options: [
            "To compile code",
            "To run only one process",
            "To manage hardware and provide a user interface",
            "To manage the internet connection only"
        ],
        answer: 2
    },
    {
        subject: "OS",
        question: "What is demand paging?",
        options: [
            "Pre-loading all memory pages",
            "Loading pages on demand when page fault occurs",
            "Loading all applications during boot",
            "Memory defragmentation"
        ],
        answer: 1
    },
    {
        subject: "OS",
        question: "What is the kernel in an OS?",
        options: [
            "A UI component",
            "A background service",
            "The core managing component of OS",
            "A document manager"
        ],
        answer: 2
    },
    {
        subject: "OS",
        question: "Which of these is a scheduling algorithm?",
        options: [
            "Depth-First Search",
            "FCFS",
            "Heap Sort",
            "Mutex Lock"
        ],
        answer: 1
    },
    {
        subject: "OS",
        question: "What is the main goal of multiprogramming?",
        options: [
            "To slow down processes",
            "To keep CPU idle",
            "To increase CPU utilization",
            "To avoid multithreading"
        ],
        answer: 2
    },
    {
        subject: "OS",
        question: "What does a time-sharing system enable?",
        options: [
            "One job per day",
            "Simultaneous multi-user interaction",
            "High disk space usage",
            "Slow CPU switching"
        ],
        answer: 1
    },
    {
        subject: "OS",
        question: "Which is NOT a problem in a computer without OS?",
        options: [
            "No File System",
            "No Networking Support",
            "Perfect Resource Management",
            "Lack of UI"
        ],
        answer: 2
    },
    {
        subject: "OS",
        question: "What is one key feature of multithreading?",
        options: [
            "Threads run on different machines",
            "Threads run in separate memory space",
            "Threads share memory and run in parallel",
            "Threads are always slower"
        ],
        answer: 2
    },
    {
        subject: "OS",
        question: "What is FCFS scheduling?",
        options: [
            "Jobs executed by length",
            "Priority based execution",
            "First job to arrive is served first",
            "Random job scheduling"
        ],
        answer: 2
    },
    {
        subject: "OS",
        question: "What is true about Round Robin scheduling?",
        options: [
            "Uses shortest job first",
            "Uses priorities to execute jobs",
            "Each process gets equal time slice in cycle",
            "Executes jobs based on length"
        ],
        answer: 2
    },
    {
        subject: "OS",
        question: "What does RAID refer to?",
        options: [
            "A CPU scheduling policy",
            "A memory management unit",
            "A collection of multiple disks working together",
            "An OS backup method"
        ],
        answer: 2
    },
  // ============================
  // 🗃️ Database Management Systems (DBMS)
  // ============================

  {
    subject: "DBMS",
    question: "Which of the following is a valid normal form?",
    options: ["First Key Form", "Second Base Form", "Third Normal Form", "Fourth Super Form"],
    answer: 2
  },
  {
    subject: "DBMS",
    question: "Which language is used to define the structure of a database?",
    options: ["DCL", "DML", "DDL", "SQL"],
    answer: 2
  },
  {
    subject: "DBMS",
    question: "Which of these is not a type of join in SQL?",
    options: ["Outer Join", "Inner Join", "Self Join", "Insert Join"],
    answer: 3
  },

  {
    subject: "DBMS",
    question: "Which of the following is a core component of a DBMS responsible for managing storage and retrieval?",
    options: ["Query Optimizer", "Transaction Manager", "Storage Manager", "Schema Validator"],
    answer: 2
  },
  {
    subject: "DBMS",
    question: "Which key ensures each record in a table is uniquely identifiable and cannot contain NULL values?",
    options: ["Candidate Key", "Foreign Key", "Primary Key", "Super Key"],
    answer: 2
  },
  {
    subject: "DBMS",
    question: "Which key in a table refers to the primary key in another table?",
    options: ["Alternate Key", "Foreign Key", "Composite Key", "Super Key"],
    answer: 1
  },
  {
    subject: "DBMS",
    question: "What is the main goal of normalization in a database?",
    options: ["Improve query speed", "Reduce redundancy and maintain data integrity", "Increase table size", "Create indexes"],
    answer: 1
  },
  {
    subject: "DBMS",
    question: "What is the purpose of denormalization in DBMS?",
    options: ["To increase data redundancy for performance optimization", "To remove indexes", "To simplify the ER diagram", "To create subqueries"],
    answer: 0
  },
  {
    subject: "DBMS",
    question: "Which SQL statement is used to retrieve data from a table?",
    options: ["INSERT", "SELECT", "UPDATE", "DELETE"],
    answer: 1
  },
  {
    subject: "DBMS",
    question: "Which of the following is true about views in DBMS?",
    options: ["They store data permanently", "They are used only for deleting data", "They are virtual tables that present data from one or more tables", "They can act as a primary key"],
    answer: 2
  },
  {
    subject: "DBMS",
    question: "Which relationship type allows multiple records in one table to link to multiple records in another?",
    options: ["One-to-One", "One-to-Many", "Many-to-Many", "Self-Join"],
    answer: 2
  },
  {
    subject: "DBMS",
    question: "Which of the following constraints ensures all values in a column are different?",
    options: ["NOT NULL", "DEFAULT", "CHECK", "UNIQUE"],
    answer: 3
  },
  {
    subject: "DBMS",
    question: "Which operation permanently saves changes in the database?",
    options: ["ROLLBACK", "SAVEPOINT", "COMMIT", "CANCEL"],
    answer: 2
  },

  {
        subject: "DBMS",
        question: "Which SQL clause is used to group rows sharing a property so that an aggregate function can be applied to each group?",
        options: ["GROUP BY", "ORDER BY", "HAVING", "WHERE"],
        answer: 0
    },
    {
        subject: "DBMS",
        question: "Which of the following statements about candidate keys is true?",
        options: [
            "Candidate keys can contain duplicate values.",
            "Candidate keys can contain NULL values.",
            "A table can have only one candidate key.",
            "Candidate keys uniquely identify each record in a table."
        ],
        answer: 3
    },
    {
        subject: "DBMS",
        question: "Which SQL operation is used to combine the result set of two or more SELECT statements and removes duplicate rows?",
        options: ["JOIN", "UNION", "INTERSECT", "UNION ALL"],
        answer: 1
    },
    {
        subject: "DBMS",
        question: "Which join returns all records when there is a match in either left or right table records?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
        answer: 3
    },
    {
        subject: "DBMS",
        question: "Which normal form removes partial dependencies in a relation?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: 1
    },
    {
        subject: "DBMS",
        question: "Which type of join creates a Cartesian product of the two tables?",
        options: ["SELF JOIN", "INNER JOIN", "CROSS JOIN", "FULL OUTER JOIN"],
        answer: 2
    },
    {
        subject: "DBMS",
        question: "Which of the following ensures referential integrity in a DBMS?",
        options: ["Primary Key", "Check Constraint", "Foreign Key", "Index"],
        answer: 2
    },
    {
        subject: "DBMS",
        question: "Which command is used to remove all records from a table without logging individual row deletions?",
        options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
        answer: 2
    },
    {
        subject: "DBMS",
        question: "Which of these is a valid aggregate function in SQL?",
        options: ["SELECT", "COUNT", "TRIGGER", "JOIN"],
        answer: 1
    },
    {
        subject: "DBMS",
        question: "What is the purpose of the ACID property Isolation in DBMS?",
        options: [
            "To ensure all operations are completed or none at all",
            "To make sure the database remains in a valid state",
            "To prevent other transactions from accessing intermediate data",
            "To ensure changes are permanent"
        ],
        answer: 2
    },
    {
        subject: "DBMS",
        question: "Which DBMS component interprets and executes SQL queries?",
        options: ["Storage Manager", "Query Processor", "Transaction Manager", "Scheduler"],
        answer: 1
    },
    {
        subject: "DBMS",
        question: "Which of the following is not a type of SQL join?",
        options: ["INNER JOIN", "OUTER JOIN", "TOP JOIN", "SELF JOIN"],
        answer: 2
    },
    {
        subject: "DBMS",
        question: "Which of the following database objects can be used to store precompiled SQL code for reuse?",
        options: ["Cursor", "Index", "Stored Procedure", "Trigger"],
        answer: 2
    },
    {
        subject: "DBMS",
        question: "What type of lock allows multiple transactions to read a resource but not modify it?",
        options: ["Exclusive Lock", "Shared Lock", "Update Lock", "Intent Lock"],
        answer: 1
    },
    {
        subject: "DBMS",
        question: "Which type of index directly modifies the order in which the table’s rows are stored?",
        options: ["Non-clustered Index", "Hash Index", "Clustered Index", "Bitmap Index"],
        answer: 2
    },
    {
        subject: "DBMS",
        question: "Which clause ensures that modifications via a SQL view follow the constraints of the view's definition?",
        options: ["HAVING", "WITH CHECK OPTION", "WHERE", "GROUP BY"],
        answer: 1
    },
    {
        subject: "DBMS",
        question: "Which of these is not a valid SQL constraint?",
        options: ["PRIMARY KEY", "DEFAULT", "UNIQUE", "NULLABLE"],
        answer: 3
    },
    {
        subject: "DBMS",
        question: "Which of the following statements about stored functions is true?",
        options: [
            "Stored functions can return multiple tables",
            "Stored functions must return a value",
            "Stored functions cannot accept parameters",
            "Stored functions are used only in triggers"
        ],
        answer: 1
    },
    {
        subject: "DBMS",
        question: "Which tool visually represents entities and their relationships in DBMS design?",
        options: ["Schema", "Table", "ER Diagram", "SQL View"],
        answer: 2
    },
    {
        subject: "DBMS",
        question: "Which of the following constraints is used to prevent orphan records?",
        options: ["PRIMARY KEY", "CHECK", "FOREIGN KEY", "DEFAULT"],
        answer: 2
    },

  // ============================
  // 🌐 Computer Networks (CN)
  // ============================

  {
    subject: "CN",
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "HyperText Transmission Process",
      "Host Transfer Text Protocol",
      "High-Level Transfer Protocol"
    ],
    answer: 0
  },
  {
    subject: "CN",
    question: "Which layer in the OSI model is responsible for routing?",
    options: ["Transport", "Network", "Data Link", "Application"],
    answer: 1
  },
  {
    subject: "CN",
    question: "What type of IP address is 127.0.0.1?",
    options: ["Public", "Private", "Broadcast", "Loopback"],
    answer: 3
  },

  {
    "subject": "CN",
    "question": "Which algorithm is used in OSPF for shortest path calculation?",
    "options": ["Bellman-Ford", "Flooding", "Dijkstra's", "Prim's"],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "Which of the following TCP flags is used to initiate a connection?",
    "options": ["ACK", "SYN", "FIN", "RST"],
    "answer": 1
  },
  {
    "subject": "CN",
    "question": "What is the size of an IPv6 address?",
    "options": ["32 bits", "64 bits", "128 bits", "256 bits"],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "Which protocol resolves an IP address to a MAC address?",
    "options": ["RARP", "ICMP", "ARP", "DNS"],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "Which protocol is used for secure communication over a computer network?",
    "options": ["FTP", "HTTP", "SSH", "SNMP"],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "What is the primary function of the transport layer?",
    "options": ["Path determination", "Encryption", "Reliable data transfer", "MAC addressing"],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "Which IP class provides a maximum of only 254 host addresses per network?",
    "options": ["Class A", "Class B", "Class C", "Class D"],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "Which layer ensures error-free delivery of data?",
    "options": ["Network", "Data Link", "Transport", "Session"],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "Which addressing mode does IPv4 use for broadcasting messages?",
    "options": ["Unicast", "Anycast", "Broadcast", "Multicast"],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "What is the function of a subnet mask?",
    "options": [
      "To determine the default gateway",
      "To specify the DNS server",
      "To identify the network and host portions of an IP address",
      "To allow only encrypted traffic"
    ],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "Which TCP congestion control algorithm uses slow start and congestion avoidance phases?",
    "options": ["Tahoe", "Reno", "Vegas", "Cubic"],
    "answer": 0
  },
  {
    "subject": "CN",
    "question": "What is the default port number for HTTPS?",
    "options": ["80", "20", "443", "21"],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "Which of the following is not a characteristic of UDP?",
    "options": ["Connectionless", "Reliable", "Faster than TCP", "No congestion control"],
    "answer": 1
  },
  {
    "subject": "CN",
    "question": "Which field in the IP header is used to prevent packets from circulating indefinitely?",
    "options": ["Header Length", "Identification", "TTL", "Fragment Offset"],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "What is the purpose of the three-way handshake in TCP?",
    "options": [
      "To establish encryption keys",
      "To verify DNS resolution",
      "To negotiate window size",
      "To establish a reliable connection"
    ],
    "answer": 3
  },
  {
    "subject": "CN",
    "question": "Which technique is used to avoid collision in Ethernet?",
    "options": ["CSMA/CD", "Token Passing", "Polling", "Flooding"],
    "answer": 0
  },
  {
    "subject": "CN",
    "question": "What is the main disadvantage of circuit switching over packet switching?",
    "options": [
      "Higher delay",
      "Wastes bandwidth during idle periods",
      "Lack of QoS",
      "No guaranteed path"
    ],
    "answer": 1
  },
  {
    "subject": "CN",
    "question": "Which protocol uses a hierarchical naming system for computers and services?",
    "options": ["DHCP", "DNS", "ARP", "ICMP"],
    "answer": 1
  },
  {
    "subject": "CN",
    "question": "Which protocol does traceroute use to determine the path to a destination?",
    "options": ["UDP", "TCP", "ICMP", "HTTP"],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "In IPv4 addressing, what is the loopback address range?",
    "options": ["10.0.0.0/8", "127.0.0.0/8", "192.168.0.0/16", "172.16.0.0/12"],
    "answer": 1
  },
  {
    "subject": "CN",
    "question": "Which one is a distance-vector routing protocol?",
    "options": ["OSPF", "EIGRP", "RIP", "IS-IS"],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "What does CIDR stand for?",
    "options": [
      "Classless Inter-Domain Routing",
      "Classful Internet Domain Routing",
      "Connected Internet Domain Registry",
      "Connectionless IP Data Routing"
    ],
    "answer": 0
  },
  {
    "subject": "CN",
    "question": "Which of the following best describes NAT (Network Address Translation)?",
    "options": [
      "A protocol for encrypting IP packets",
      "A method to increase IP addressing space",
      "A technique to map private to public IP addresses",
      "A routing algorithm used in ISPs"
    ],
    "answer": 2
  },
  {
    "subject": "CN",
    "question": "Which command is used to test connectivity between two hosts?",
    "options": ["netstat", "ping", "ftp", "arp"],
    "answer": 1
  },
  {
    "subject": "CN",
    "question": "Which layer in OSI is responsible for end-to-end delivery of complete messages?",
    "options": ["Session", "Transport", "Network", "Data Link"],
    "answer": 1
  },
    
  // ============================
  // 🧱 Object-Oriented Programming (OOPS)
  // ============================

  {
    subject: "OOPS",
    question: "Which feature of OOP indicates code reusability?",
    options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
    answer: 2
  },
  {
    subject: "OOPS",
    question: "Which keyword is used to create an object in C++?",
    options: ["class", "new", "object", "init"],
    answer: 1
  },
  {
    subject: "OOPS",
    question: "Polymorphism allows:",
    options: [
      "Multiple functions with same name but different implementations",
      "Multiple classes in a single file",
      "Same object name for all classes",
      "One function inside multiple classes"
    ],
    answer: 0
  },

  {
    "subject": "OOPS",
    "question": "Which principle of OOP binds together data and functions that manipulate it?",
    "options": ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    "answer": 2
  },
  {
    "subject": "OOPS",
    "question": "Which of the following allows function overloading in C++?",
    "options": ["Function name overloading", "Signature difference", "Return type difference", "Data type hiding"],
    "answer": 1
  },
  {
    "subject": "OOPS",
    "question": "Which of the following is not a type of inheritance in C++?",
    "options": ["Single", "Multiple", "Multilevel", "Sequential"],
    "answer": 3
  },
  {
    "subject": "OOPS",
    "question": "What is the term for accessing a base class member function from a derived class using the same name?",
    "options": ["Overloading", "Shadowing", "Overriding", "Encapsulation"],
    "answer": 2
  },
  {
    "subject": "OOPS",
    "question": "Which access specifier makes a class member visible to derived classes but not to other classes?",
    "options": ["Private", "Public", "Protected", "Static"],
    "answer": 2
  },
  {
    "subject": "OOPS",
    "question": "Which of the following concepts is used to implement dynamic method dispatch?",
    "options": ["Virtual Functions", "Static Functions", "Friend Functions", "Inline Functions"],
    "answer": 0
  },
  {
    "subject": "OOPS",
    "question": "Which of the following cannot be virtual in C++?",
    "options": ["Constructor", "Destructor", "Member function", "Operator function"],
    "answer": 0
  },
  {
    "subject": "OOPS",
    "question": "In Java, the 'final' keyword can be used with all except:",
    "options": ["Class", "Method", "Constructor", "Variable"],
    "answer": 2
  },
  {
    "subject": "OOPS",
    "question": "Which of the following best describes abstraction?",
    "options": [
      "Hiding irrelevant details and showing only essential features",
      "Binding data and functions together",
      "Deriving new classes from existing ones",
      "Using the same method name for different tasks"
    ],
    "answer": 0
  },
  {
    "subject": "OOPS",
    "question": "What is the output of calling a pure virtual function?",
    "options": ["Runtime error", "Function returns 0", "Compile-time error", "Depends on implementation"],
    "answer": 3
  },
  {
    "subject": "OOPS",
    "question": "Which principle supports the 'Open-Closed Principle' from SOLID design?",
    "options": ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    "answer": 1
  },
  {
    "subject": "OOPS",
    "question": "What is the size of an empty class in C++?",
    "options": ["0 bytes", "1 byte", "2 bytes", "Compiler dependent"],
    "answer": 1
  },
  {
    "subject": "OOPS",
    "question": "Which of the following is true about friend functions?",
    "options": [
      "They violate encapsulation",
      "They can be inherited",
      "They are part of the class scope",
      "They can be virtual"
    ],
    "answer": 0
  },
  {
    "subject": "OOPS",
    "question": "Which of the following is not a pillar of object-oriented programming?",
    "options": ["Polymorphism", "Encapsulation", "Abstraction", "Compilation"],
    "answer": 3
  },
  {
    "subject": "OOPS",
    "question": "Which type of polymorphism is achieved by method overloading?",
    "options": ["Runtime", "Dynamic", "Compile-time", "Late binding"],
    "answer": 2
  },
  {
    "subject": "OOPS",
    "question": "Which design principle ensures a class has only one responsibility?",
    "options": ["Encapsulation", "Single Responsibility Principle", "Open-Closed Principle", "Liskov Substitution Principle"],
    "answer": 1
  },
  {
    "subject": "OOPS",
    "question": "In which scenario should you use abstract classes over interfaces in Java?",
    "options": [
      "When you want full abstraction",
      "When multiple inheritance is required",
      "When partial implementation is needed",
      "When no implementation is required"
    ],
    "answer": 2
  },
  {
    "subject": "OOPS",
    "question": "Which keyword prevents a class from being inherited in C++?",
    "options": ["sealed", "final", "const", "private"],
    "answer": 1
  },
  {
    "subject": "OOPS",
    "question": "Which concept ensures that only one instance of a class exists in memory?",
    "options": ["Factory Pattern", "Singleton Pattern", "Builder Pattern", "Prototype Pattern"],
    "answer": 1
  },
  {
    "subject": "OOPS",
    "question": "What is the advantage of using a virtual destructor in a base class?",
    "options": [
      "It speeds up execution",
      "It avoids memory leaks when deleting derived objects",
      "It prevents object slicing",
      "It allows constructor overloading"
    ],
    "answer": 1
  },
  {
    "subject": "OOPS",
    "question": "Which of the following best describes constructor overloading?",
    "options": [
      "Using the same constructor for multiple objects",
      "Declaring multiple constructors with different parameters",
      "Overriding a constructor in the derived class",
      "Using a constructor in a static class"
    ],
    "answer": 1
  },
  {
    "subject": "OOPS",
    "question": "Which concept allows a child class to define its own version of a method?",
    "options": ["Overloading", "Overriding", "Shadowing", "Refactoring"],
    "answer": 1
  },
  {
    "subject": "OOPS",
    "question": "Which mechanism allows an object to exhibit different behaviors in different contexts?",
    "options": ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    "answer": 1
  },
  {
    "subject": "OOPS",
    "question": "Which of the following is true about static members in a class?",
    "options": [
      "Each object has its own copy",
      "It is not shared among instances",
      "It can be accessed without object instantiation",
      "It cannot be modified once set"
    ],
    "answer": 2
  },
  {
    "subject": "OOPS",
    "question": "Which of these is the best example of encapsulation?",
    "options": [
      "A car engine hidden behind interface methods like start() and stop()",
      "Creating a subclass from a superclass",
      "Using an interface to define a class",
      "Using method overloading"
    ],
    "answer": 0
  }
];

export default questions;
