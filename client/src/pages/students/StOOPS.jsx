import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const subjectFlowTopics = [
  'Introduction',
  'OOPS Principles and Pillars',
  'Classes and Objects',
  'Constructors and Destructors',
  'Access Control and Class Design',
  'Inheritance',
  'Polymorphism',
  'Abstract Classes and Interfaces',
  'Exception Handling and Resource Management',
  'Advanced OOPs Concepts',
  'OOPs in Practice',
];

const detailedTopics = [
  'Introduction',
  'OOPS Principles and Pillars',
  'Classes and Objects',
  'Constructors and Destructors',
  'Access Control and Class Design',
  'Inheritance',
  'Polymorphism',
  'Abstract Classes and Interfaces',
  'Exception Handling and Resource Management',
  'Advanced OOPs Concepts',
  'OOPs in Practice',
  'Relevant Interview Questions'
];

function SubjectFlowBar({ topics, activeIdx, setActiveIdx }) {
  return (
    <div className="w-full overflow-x-auto pb-4 mb-30 flex justify-center">
      <div className="inline-flex gap-10 min-w-full px-2">
        {topics.map((topic, idx) => (
          <button
            key={topic}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`relative flex flex-col items-center group transition-transform duration-300 focus:outline-none bg-white border border-slate-200 shadow-md ${
              activeIdx === idx ? 'scale-110 z-10 ring-2 ring-indigo-200/60' : 'hover:scale-105'
            }`}
            style={{ minWidth: 220 }}
          >
            {/* Roadmap line */}
            {idx !== 0 && (
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-indigo-300 to-blue-300 opacity-60 z-0" />
            )}
            {/* Node */}
            <span
              className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-300 border-2 bg-white ${
                activeIdx === idx
                  ? 'border-indigo-400 shadow-indigo-300/60 text-indigo-700 ring-4 ring-indigo-200/40'
                  : 'border-slate-200 shadow-slate-200/60 text-indigo-500 group-hover:shadow-indigo-200/80'
              }`}
              style={activeIdx === idx ? { boxShadow: '0 0 16px 4px #6366f1aa' } : {}}
            >
              <span className="font-bold text-lg select-none">{idx + 1}</span>
            </span>
            {/* Label */}
            <span
              className={`mt-2 text-xs font-medium transition-colors duration-300 whitespace-nowrap ${
                activeIdx === idx ? 'text-indigo-700' : 'text-slate-800 group-hover:text-indigo-500'
              }`}
            >
              {topic}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
function Accordion({ topics, openIdx, setOpenIdx }) {
  return (
    <div className="w-full flex flex-col gap-6">
      {topics.map((topic, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={topic}
            className={`w-full rounded-2xl shadow-xl transition-all duration-300 border border-slate-200 backdrop-blur-md bg-white hover:shadow-2xl ${
              isOpen ? 'bg-white border-indigo-200 shadow-indigo-200/40' : ''
            }`}
            style={{ boxShadow: isOpen ? '0 8px 32px 0 rgba(99,102,241,0.10)' : undefined }}
          >
            <button
                className={`w-full flex items-center justify-between px-8 py-5 text-left font-semibold text-lg tracking-wide rounded-2xl transition-all duration-300 focus:outline-none bg-white ${
                  isOpen ? 'text-indigo-700' : 'text-slate-800 hover:bg-slate-50'
                }`}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
              aria-controls={`panel-${topic}`}
            >
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 mr-2 shadow-md" />
                {topic}
              </span>
              <svg
                className={`w-6 h-6 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-500' : 'rotate-0 text-slate-400'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`panel-${topic}`}
              className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-none py-6 px-8 opacity-100' : 'max-h-0 py-0 px-8 opacity-0'}`}
              aria-hidden={!isOpen}
            >
              {isOpen && (
                <div className="text-slate-700 text-base animate-fade-in">
                  {topic === 'Introduction' ? (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">Chapter 1: Introduction to Object-Oriented Programming (OOPs)</h2>
                      </div>

                      {/* Main Description */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <p className="text-lg text-slate-800">Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around data, or <b>objects</b>, rather than functions and logic. Each object is an instance of a class and encapsulates both state (data/attributes) and behavior (functions/methods). OOP is widely used in modern software development due to its emphasis on <b>modularity, reusability, and maintainability</b>.</p>
                      </div>

                      {/* Why OOP was Introduced */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🔹</span> Why OOP was Introduced</h3>
                        <p>Before OOP, programs were primarily written using the procedural or structured programming paradigm, where the focus was on writing functions to operate on data. As applications grew in complexity, procedural programs became harder to maintain, scale, and debug. Data was exposed to all functions, leading to poor control over how it was modified. OOP was introduced to solve these limitations by enforcing better design structure through data abstraction, encapsulation, and separation of concerns.</p>
                      </div>

                      {/* Key Concepts of OOP */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🔹</span> Key Concepts of OOP</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>Abstraction</b> – Hiding internal details and exposing only the essential features.</li>
                          <li><b>Encapsulation</b> – Bundling data and methods that operate on the data into a single unit (class).</li>
                          <li><b>Inheritance</b> – Creating new classes from existing ones to promote code reuse.</li>
                          <li><b>Polymorphism</b> – Allowing methods to behave differently based on the object context.</li>
                        </ul>
                        <p className="mt-2">These principles lead to cleaner, modular, and extensible code, which is essential in large-scale software development.</p>
                      </div>

                      {/* OOP vs Structured Programming Table */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-3"><span>🔹</span> OOP vs. Structured Programming</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-[340px] w-full border border-slate-300 rounded-xl text-sm bg-white">
                            <thead>
                              <tr className="bg-indigo-100 text-indigo-700">
                                <th className="px-3 py-2 border-b">Feature</th>
                                <th className="px-3 py-2 border-b">Structured Programming</th>
                                <th className="px-3 py-2 border-b">Object-Oriented Programming</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-3 py-2 border-b">Focus</td>
                                <td className="px-3 py-2 border-b">Functions and procedures</td>
                                <td className="px-3 py-2 border-b">Objects and classes</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Data</td>
                                <td className="px-3 py-2 border-b">Global/shared</td>
                                <td className="px-3 py-2 border-b">Encapsulated within objects</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Reusability</td>
                                <td className="px-3 py-2 border-b">Through function reuse</td>
                                <td className="px-3 py-2 border-b">Through class inheritance and polymorphism</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Modularity</td>
                                <td className="px-3 py-2 border-b">Limited</td>
                                <td className="px-3 py-2 border-b">High</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">Scalability</td>
                                <td className="px-3 py-2">Harder in large systems</td>
                                <td className="px-3 py-2">Easier and more maintainable</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-2">Structured programming is simpler and works well for smaller applications, but OOP provides better tools for managing complexity in large systems.</p>
                      </div>

                      {/* Other Programming Paradigms */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🔹</span> Other Programming Paradigms</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>Procedural Programming</b> – Code is structured as a sequence of instructions and function calls.</li>
                          <li><b>Functional Programming</b> – Emphasizes immutability and pure functions (e.g., Haskell, Elixir).</li>
                          <li><b>Declarative Programming</b> – Focuses on what should be done, not how (e.g., SQL).</li>
                          <li><b>Event-driven Programming</b> – Code responds to events or user actions (e.g., GUI development).</li>
                        </ul>
                        <p className="mt-2">Each paradigm has its own use-cases, but OOP remains dominant in general-purpose and enterprise software.</p>
                      </div>

                      {/* Common Object-Oriented Languages */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🔹</span> Common Object-Oriented Languages</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>Fully OOP languages:</b> Java, C#, Smalltalk, Ruby</li>
                          <li><b>Multi-paradigm with OOP support:</b> C++, Python, JavaScript, Swift</li>
                          <li><b>Procedural languages with OOP-like constructs:</b> C (limited support)</li>
                        </ul>
                      </div>

                      {/* Why OOP is So Popular */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🔹</span> Why OOP is So Popular</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Better code organization and modularity</li>
                          <li>Improved maintainability and scalability</li>
                          <li>Ease of reuse through inheritance and interfaces</li>
                          <li>Cleaner API design and separation of concerns</li>
                        </ul>
                        <p className="mt-2">It's especially suited for large teams, enterprise applications, and software that evolves over time.</p>
                      </div>

                      {/* Advantages of OOP */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-green-600 flex items-center gap-2 mb-2"><span>🔹</span> Advantages of OOP</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>✅ <b>Modular Code:</b> Easier to debug and understand</li>
                          <li>✅ <b>Reusability:</b> Inheritance allows code reuse across projects</li>
                          <li>✅ <b>Scalability:</b> New features can be added with minimal changes</li>
                          <li>✅ <b>Encapsulation:</b> Protects internal data and prevents unintended access</li>
                          <li>✅ <b>Polymorphism:</b> Enhances flexibility and interface design</li>
                        </ul>
                      </div>

                      {/* Disadvantages of OOP */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-red-600 flex items-center gap-2 mb-2"><span>🔹</span> Disadvantages of OOP</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>❌ <b>Increased Complexity:</b> Overhead in design for small programs</li>
                          <li>❌ <b>Steeper Learning Curve:</b> Concepts like inheritance, abstraction may confuse beginners</li>
                          <li>❌ <b>Performance Overhead:</b> Indirection and dynamic dispatch can slow things down</li>
                          <li>❌ <b>Over-Engineering:</b> Misuse of OOP can lead to unnecessarily complex systems</li>
                        </ul>
                      </div>

                      {/* Summary */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-700 flex items-center gap-2 mb-2"><span>✅</span> Summary</h3>
                        <p>OOP is not just a way of coding but a mindset for solving real-world problems through structured design. It is the foundation of modern software engineering, enabling developers to build complex, scalable, and maintainable systems effectively. Understanding OOP deeply is essential for excelling in software interviews and professional development.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'OOPS Principles and Pillars' ? (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">Chapter 2: OOP Principles and Pillars (APIE)</h2>
                      </div>

                      {/* Introduction */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <p>At the core of Object-Oriented Programming (OOP) lie four fundamental principles — <b>Abstraction, Polymorphism, Inheritance, and Encapsulation</b>, often abbreviated as <b>APIE</b>. These pillars collectively enable clean design, modularity, flexibility, and reusability — all of which are critical in software interviews and real-world development.</p>
                      </div>

                      {/* Encapsulation */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🔹</span> 1. Encapsulation – "Data Hiding and Binding Together"</h3>
                        <p>Encapsulation is the process of bundling data (variables) and the methods that operate on that data into a single unit called a class. It restricts direct access to internal object state using access specifiers like private, protected, and public.</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Prevents unauthorized access and modification of internal data.</li>
                          <li>Achieved using private data members and public getter/setter methods.</li>
                          <li>Promotes modularity, security, and code maintainability.</li>
                        </ul>
                        <div className="mt-2 text-yellow-700 bg-yellow-50 border-l-4 border-yellow-400 rounded p-2 text-sm">🔸 <b>Interview Tip:</b> Be ready to explain how encapsulation helps prevent unintended side effects and allows better control over class behavior.</div>
                      </div>

                      {/* Abstraction */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🔹</span> 2. Abstraction – "Hiding Complexity and Showing Essentials"</h3>
                        <p>Abstraction refers to the act of hiding internal implementation details and exposing only the relevant functionalities to the user. It simplifies system usage and reduces complexity.</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Focuses on what an object does, not how it does it.</li>
                          <li>Achieved through abstract classes and interfaces.</li>
                          <li>Encourages loose coupling and high-level code interaction.</li>
                        </ul>
                        <div className="mt-2 text-yellow-700 bg-yellow-50 border-l-4 border-yellow-400 rounded p-2 text-sm">🔸 <b>Interview Tip:</b> Be ready to describe how APIs abstract hardware/software details (e.g., <code>print()</code> hides the underlying I/O logic).</div>
                      </div>

                      {/* Encapsulation vs Abstraction Table */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-3"><span>🔁</span> Encapsulation vs Abstraction</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-[340px] w-full border border-slate-300 rounded-xl text-sm bg-white">
                            <thead>
                              <tr className="bg-indigo-100 text-indigo-700">
                                <th className="px-3 py-2 border-b">Feature</th>
                                <th className="px-3 py-2 border-b">Encapsulation</th>
                                <th className="px-3 py-2 border-b">Abstraction</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-3 py-2 border-b">Focus</td>
                                <td className="px-3 py-2 border-b">Hiding data (internal state)</td>
                                <td className="px-3 py-2 border-b">Hiding complexity (implementation details)</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Purpose</td>
                                <td className="px-3 py-2 border-b">Protect data</td>
                                <td className="px-3 py-2 border-b">Expose only essentials</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Achieved via</td>
                                <td className="px-3 py-2 border-b">Access modifiers, classes</td>
                                <td className="px-3 py-2 border-b">Abstract classes, interfaces</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Real-life example</td>
                                <td className="px-3 py-2 border-b">Medicine bottle with a label (safe use)</td>
                                <td className="px-3 py-2 border-b">Using a car without knowing engine internals</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Inheritance */}
<div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
  <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">
    <span>🔹</span> 3. Inheritance – "Reusability of Code"
  </h3>
  <p>
    Inheritance is the mechanism by which one class (child/subclass) acquires the properties and behaviors of another class (parent/superclass). It promotes code reuse, hierarchical classification, and extensibility.
  </p>
  <ul className="list-disc pl-6 space-y-1 mt-2">
    <li>Enables creating specialized classes from general ones.</li>
    <li>Reduces redundancy by reusing existing code.</li>
    <li>Supports overriding for customized behavior in subclasses.</li>
  </ul>
  <div className="mt-4">
    <div className="font-semibold text-slate-700 mb-1">Example:</div>
    <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
{`// C++ Example: Inheritance
#include <iostream>
using namespace std;

class Animal {
public:
    void speak() {
        cout << "Animal makes a sound" << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Dog d;
    d.speak();  // Inherited from Animal
    d.bark();   // Defined in Dog
    return 0;
}`}
    </pre>
  </div>
  <div className="mt-2 text-yellow-700 bg-yellow-50 border-l-4 border-yellow-400 rounded p-2 text-sm">
    🔸 <b>Interview Tip:</b> Be ready to justify when composition (HAS-A) is preferred over inheritance (IS-A).
  </div>
</div>

{/* Polymorphism */}
<div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
  <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">
    <span>🔹</span> 4. Polymorphism – "One Interface, Many Forms"
  </h3>
  <p>
    Polymorphism allows objects to take many forms, letting the same interface behave differently based on the underlying object or context.
  </p>
  <div className="mt-2">
    <div className="font-semibold text-slate-700 mb-1">Types:</div>
    <ul className="list-disc pl-6 space-y-1">
      <li><b>Compile-Time Polymorphism (Static Binding):</b> Achieved via method overloading and operator overloading. Resolved during compilation.</li>
      <li><b>Run-Time Polymorphism (Dynamic Binding):</b> Achieved via method overriding using virtual functions. Resolved at runtime using dynamic dispatch.</li>
    </ul>
  </div>
  <div className="mt-4">
    <div className="font-semibold text-slate-700 mb-1">Example (Runtime Polymorphism):</div>
    <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
{`// C++ Example: Polymorphism with Virtual Function
#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() {
        cout << "Animal makes a sound" << endl;
    }
};

class Cat : public Animal {
public:
    void sound() override {
        cout << "Cat meows" << endl;
    }
};

class Dog : public Animal {
public:
    void sound() override {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Animal* a;

    a = new Cat();
    a->sound();  // Output: Cat meows

    a = new Dog();
    a->sound();  // Output: Dog barks

    delete a;
    return 0;
}`}
    </pre>
  </div>
  <div className="mt-2 text-yellow-700 bg-yellow-50 border-l-4 border-yellow-400 rounded p-2 text-sm">
    🔸 <b>Interview Tip:</b> Interviewers often test your ability to implement and distinguish static vs dynamic polymorphism. Also, be prepared to answer: Can polymorphism exist without inheritance?<br />
    ✔ Yes, via function overloading or templates (static polymorphism) in C++.
  </div>
</div>


                      {/* Summary Table */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-700 flex items-center gap-2 mb-2"><span>✅</span> Summary of APIE Pillars</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-[340px] w-full border border-slate-300 rounded-xl text-sm bg-white">
                            <thead>
                              <tr className="bg-indigo-100 text-indigo-700">
                                <th className="px-3 py-2 border-b">Principle</th>
                                <th className="px-3 py-2 border-b">Purpose</th>
                                <th className="px-3 py-2 border-b">Benefit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-3 py-2 border-b">Abstraction</td>
                                <td className="px-3 py-2 border-b">Hide complexity</td>
                                <td className="px-3 py-2 border-b">Simpler interface, loose coupling</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Polymorphism</td>
                                <td className="px-3 py-2 border-b">Unified interface, varied behavior</td>
                                <td className="px-3 py-2 border-b">Flexibility, extensibility</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Inheritance</td>
                                <td className="px-3 py-2 border-b">Reuse code from existing classes</td>
                                <td className="px-3 py-2 border-b">Reduces redundancy</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">Encapsulation</td>
                                <td className="px-3 py-2">Restrict access to data</td>
                                <td className="px-3 py-2">Security, modularity</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-2">Mastering these four pillars is crucial for software interviews, as they are the foundation of OOP design questions, system modeling, and source code analysis.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Classes and Objects' ? (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">Classes and Objects – "Building Blocks of OOP"</h2>
                      </div>

                      {/* Introduction */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <p>In Object-Oriented Programming (OOP), <b>classes</b> and <b>objects</b> form the core foundation. They enable abstraction, encapsulation, and real-world modeling in software design.</p>
                      </div>

                      {/* Class Blueprint */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>📘</span> Class – A Blueprint for Objects</h3>
                        <p>A <b>class</b> is a user-defined data type that serves as a blueprint to create objects. It encapsulates data (attributes) and functions (methods) that define the behavior of its instances. It does not occupy memory on its own until instantiated.</p>
                        <div className="mt-2 text-slate-700 italic">Think of a class as a blueprint of a car – it defines how cars should be built, but doesn't represent any specific car.</div>
                        <div className="mt-4">
                          <div className="font-semibold text-slate-700 mb-1">C++ Example:</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Animal {
public:
  string name;
  void speak() {
    cout << "Animal sound";
  }
};`}</pre>
                        </div>
                      </div>

                      {/* Object Instance */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>📦</span> Object – An Instance of a Class</h3>
                        <p>An <b>object</b> is a concrete instance of a class. When you create an object, memory is allocated, and you can access the class's members using this object.</p>
                        <div className="mt-4">
                          <div className="font-semibold text-slate-700 mb-1">C++ Example:</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`Animal dog;
dog.name = "Tommy";
dog.speak(); // Output: Animal sound`}</pre>
                        </div>
                      </div>

                      {/* Memory Perspective */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🧠</span> Memory Perspective</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>A class definition does not occupy memory.</li>
                          <li>An object consumes memory based on the size of its data members.</li>
                          <li>Member functions are shared across all objects (only one copy exists).</li>
                        </ul>
                      </div>

                      {/* Is Object Creation Mandatory? */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>❓</span> Is Object Creation Mandatory?</h3>
                        <p>No. Classes can be used for static members, namespacing, or utility functions (e.g., using a class without ever creating an object of it).</p>
                      </div>

                      {/* Class vs Structure Table */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-3"><span>🆚</span> Class vs Structure (in C++)</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-[340px] w-full border border-slate-300 rounded-xl text-sm bg-white">
                            <thead>
                              <tr className="bg-indigo-100 text-indigo-700">
                                <th className="px-3 py-2 border-b">Feature</th>
                                <th className="px-3 py-2 border-b">class</th>
                                <th className="px-3 py-2 border-b">struct</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-3 py-2 border-b">Default access</td>
                                <td className="px-3 py-2 border-b">private</td>
                                <td className="px-3 py-2 border-b">public</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">OOP Features</td>
                                <td className="px-3 py-2 border-b">Fully supported</td>
                                <td className="px-3 py-2 border-b">Supported (in C++)</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">Purpose</td>
                                <td className="px-3 py-2">Designed for OOP</td>
                                <td className="px-3 py-2">Originally for data grouping</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Constructors and Destructors' ? (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">Constructors and Destructors – "Object Lifecycle Managers"</h2>
                      </div>

                      {/* Introduction */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <p>In C++, <b>constructors</b> and <b>destructors</b> are special member functions that manage the lifecycle of an object—from creation to destruction. They play a vital role in initialization and resource cleanup.</p>
                      </div>

                      {/* Constructor */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🏗️</span> Constructor – Initialization Mechanism</h3>
                        <p>A <b>constructor</b> is a special function automatically invoked when an object is created. It initializes data members and may allocate dynamic resources if needed. It shares the class name, has no return type, and can be overloaded.</p>
                      </div>

                      {/* Types of Constructors */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>✳️</span> Types of Constructors in C++</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>Default Constructor</b> – Takes no parameters.</li>
                          <li><b>Parameterized Constructor</b> – Takes arguments to initialize members.</li>
                          <li><b>Copy Constructor</b> – Creates a new object as a copy of an existing one.</li>
                          <li><b>Dynamic Constructor</b> – Allocates memory dynamically during object creation.</li>
                          <li><b>Delegating Constructor (C++11)</b> – Calls another constructor from within a constructor.</li>
                        </ul>
                        <div className="mt-4">
                          <div className="font-semibold text-slate-700 mb-1">C++ Example:</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Demo {
  int x;
public:
  Demo() { x = 0; } // Default
  Demo(int val) { x = val; } // Parameterized
  Demo(const Demo &d) { x = d.x; } // Copy
};`}</pre>
                        </div>
                        <div className="mt-2 text-green-700 bg-green-50 border-l-4 border-green-400 rounded p-2 text-sm">✅ <b>Constructor Overloading is allowed</b> — multiple constructors can exist in a class, distinguished by their parameter list.</div>
                      </div>

                      {/* Destructor */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🧽</span> Destructor – Cleanup Mechanism</h3>
                        <p>A <b>destructor</b> is a special function automatically invoked when an object goes out of scope or is deleted. It deallocates memory and cleans up resources. It starts with a tilde <b>~</b> followed by the class name and has no return type and no parameters.</p>
                        <div className="mt-4">
                          <div className="font-semibold text-slate-700 mb-1">C++ Example:</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`~Demo() {
  // Clean-up code
}`}</pre>
                        </div>
                        <div className="mt-2 text-red-700 bg-red-50 border-l-4 border-red-400 rounded p-2 text-sm">⚠️ <b>Destructor Overloading is NOT allowed</b> — only one destructor can exist per class.</div>
                      </div>

                      {/* Purpose and Role */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🎯</span> Purpose and Role</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>Constructor:</b> Ensures the object starts in a valid state.</li>
                          <li><b>Destructor:</b> Ensures resources are released when the object is destroyed.</li>
                        </ul>
                        <p className="mt-2">Together, they automate memory and resource management, making them crucial for preventing leaks and ensuring program stability.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Access Control and Class Design' ? (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">Access Control and Class Design in C++</h2>
                      </div>

                      {/* Introduction */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <p>Access control is a fundamental aspect of object-oriented programming that enforces encapsulation—the practice of hiding internal object details and exposing only what is necessary. In C++, this is achieved using access specifiers: <b>public</b>, <b>private</b>, and <b>protected</b>.</p>
                      </div>

                      {/* Access Specifiers */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🔐</span> Access Specifiers</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>public:</b> Members declared under public can be accessed from anywhere the object is visible. It defines the interface for interacting with the object.</li>
                          <li><b>private:</b> These members are accessible only within the class. It's the default access level for class members and is used to protect internal implementation details.</li>
                          <li><b>protected:</b> Members are accessible within the class and its derived classes, but not from outside. Commonly used in inheritance hierarchies.</li>
                        </ul>
                        <p className="mt-2">Proper use of access specifiers leads to better encapsulation, abstraction, and code maintainability.</p>
                      </div>

                      {/* Friend Functions and Classes */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>👬</span> Friend Functions and Friend Classes</h3>
                        <p>While C++ promotes restricted access to class internals, there are exceptions:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>A <b>friend function</b> is a non-member function that is allowed to access the private and protected members of a class.</li>
                          <li>A <b>friend class</b> can access the private/protected data of another class.</li>
                        </ul>
                        <p className="mt-2">Use of <b>friend</b> should be limited and justified, as it breaks encapsulation and tightens coupling between components.</p>
                      </div>

                      {/* this Pointer */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>📍</span> this Pointer</h3>
                        <p>In non-static member functions, <b>this</b> is an implicit pointer that points to the calling object. It is commonly used to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Disambiguate between member variables and parameters.</li>
                          <li>Return the current object (<b>*this</b>) for method chaining.</li>
                          <li>Detect self-assignment in overloaded assignment operators.</li>
                        </ul>
                        <div className="mt-4">
                          <div className="font-semibold text-slate-700 mb-1">C++ Example:</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`this->x = x; // distinguish between member and local variable`}</pre>
                        </div>
                      </div>

                      {/* Class vs Structure */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🏗️</span> Class vs Structure</h3>
                        <p>In C++, both <b>class</b> and <b>struct</b> can have member functions, constructors, and access specifiers. The only difference is:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Members of a <b>class</b> are <b>private</b> by default.</li>
                          <li>Members of a <b>struct</b> are <b>public</b> by default.</li>
                        </ul>
                        <p className="mt-2">In modern C++, <b>struct</b> is often used for plain data objects, while <b>class</b> is used for abstraction and encapsulation.</p>
                      </div>

                      {/* Interview Takeaway */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-green-700 flex items-center gap-2 mb-2"><span>✅</span> Interview Takeaway</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Always choose the minimum required access level for data members.</li>
                          <li>Design classes with clear interfaces (public), controlled internal logic (private), and flexible inheritance (protected).</li>
                          <li>Use <b>friend</b> carefully and justify its use.</li>
                          <li>Master the <b>this</b> pointer to handle object-level references correctly.</li>
                        </ul>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Inheritance' ? (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">🧬 Inheritance in Object-Oriented Programming (C++ Focus)</h2>
                      </div>

                      {/* Introduction */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <p>Inheritance is a fundamental concept in OOP that allows one class (the derived class) to inherit the members (variables and functions) of another class (the base class). It enables code reuse, establishes a natural hierarchy, and promotes extensibility in software design.</p>
                      </div>

                      {/* Key Concepts */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>📘</span> Key Concepts</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>Base Class (Superclass):</b> The class whose members are inherited.</li>
                          <li><b>Derived Class (Subclass):</b> The class that inherits from the base class.</li>
                          <li><b>Access Specifiers:</b> Control access to base class members (public, protected, private).</li>
                          <li><b>"Is-a" Relationship:</b> Inheritance should model a logical hierarchy (e.g., a Dog is an Animal).</li>
                        </ul>
                      </div>

                      {/* Benefits of Inheritance */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🔁</span> Benefits of Inheritance</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>Code Reusability:</b> Avoid duplicating common logic across related classes.</li>
                          <li><b>Maintainability:</b> Update base class logic once to reflect across all derived classes.</li>
                          <li><b>Polymorphism:</b> Enables runtime flexibility using base class pointers/references.</li>
                          <li><b>Extensibility:</b> Add new features by extending existing classes.</li>
                        </ul>
                      </div>

                      {/* Types of Inheritance */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🧩</span> Types of Inheritance in C++</h3>
                        {/* Single Inheritance */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-blue-600 mb-1">1. Single Inheritance</h4>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Animal {
public:
    void eat() { std::cout << "Eating...\n"; }
};

class Dog : public Animal {
public:
    void bark() { std::cout << "Barking...\n"; }
};`}</pre>
                        </div>
                        {/* Multilevel Inheritance */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-blue-600 mb-1">2. Multilevel Inheritance</h4>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class LivingThing {
public:
    void breathe() { std::cout << "Breathing...\n"; }
};

class Animal : public LivingThing {
public:
    void eat() { std::cout << "Eating...\n"; }
};

class Dog : public Animal {
public:
    void bark() { std::cout << "Barking...\n"; }
};`}</pre>
                        </div>
                        {/* Hierarchical Inheritance */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-blue-600 mb-1">3. Hierarchical Inheritance</h4>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Animal {
public:
    void eat() { std::cout << "Eating...\n"; }
};

class Dog : public Animal {
public:
    void bark() { std::cout << "Barking...\n"; }
};

class Cat : public Animal {
public:
    void meow() { std::cout << "Meowing...\n"; }
};`}</pre>
                        </div>
                        {/* Multiple Inheritance */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-blue-600 mb-1">4. Multiple Inheritance (C++-specific)</h4>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class A {
public:
    void showA() { std::cout << "A\n"; }
};

class B {
public:
    void showB() { std::cout << "B\n"; }
};

class C : public A, public B {
public:
    void showC() { std::cout << "C\n"; }
};`}</pre>
                        </div>
                        {/* Diamond Problem */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-blue-600 mb-1">🛠 Diamond Problem</h4>
                          <p className="mb-2">Occurs when two base classes inherit from the same grandparent class and are then inherited by one class. Resolved via virtual inheritance.</p>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class A {
public:
    void display() { std::cout << "Class A\n"; }
};

class B : virtual public A {};
class C : virtual public A {};
class D : public B, public C {};  // Avoids duplicate A subobject`}</pre>
                        </div>
                        {/* Interfaces via Abstract Classes */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-blue-600 mb-1">5. Interfaces via Abstract Classes (C++)</h4>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Flyable {
public:
    virtual void fly() = 0;  // Pure virtual
};

class Swimmable {
public:
    virtual void swim() = 0;
};

class Duck : public Flyable, public Swimmable {
public:
    void fly() override { std::cout << "Flying\n"; }
    void swim() override { std::cout << "Swimming\n"; }
};`}</pre>
                        </div>
                      </div>

                      {/* Limitations of Inheritance */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-red-600 flex items-center gap-2 mb-2"><span>⚠️</span> Limitations of Inheritance</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>Tight Coupling:</b> Subclasses depend heavily on base class structure.</li>
                          <li><b>Fragile Base Class Problem:</b> Small changes in base class can break derived classes.</li>
                          <li><b>Improper Hierarchies:</b> Misuse leads to bloated, hard-to-maintain designs.</li>
                          <li><b>Diamond Problem:</b> Ambiguity in multiple inheritance, solved via virtual inheritance.</li>
                        </ul>
                      </div>

                      {/* Abstract Classes & Multiple Inheritance */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>✅</span> Abstract Classes & Multiple Inheritance</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>C++ supports multiple inheritance even with abstract classes.</li>
                          <li>Use interfaces (pure virtual classes) to simulate multiple behaviors cleanly.</li>
                        </ul>
                      </div>

                      {/* Interview Takeaways */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-green-700 flex items-center gap-2 mb-2"><span>💡</span> Interview Takeaways</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Use inheritance only when an "is-a" relationship exists.</li>
                          <li>Prefer composition over inheritance when behavior needs to change dynamically.</li>
                          <li>Know access levels in inheritance:
                            <ul className="list-disc pl-8 mt-1">
                              <li><b>public inheritance:</b> public/protected remain the same.</li>
                              <li><b>protected inheritance:</b> public becomes protected.</li>
                              <li><b>private inheritance:</b> all members become private.</li>
                            </ul>
                          </li>
                          <li>Understand constructor/destructor call order in inheritance.</li>
                          <li>Be aware of object slicing and virtual destructors in base classes when using polymorphism.</li>
                        </ul>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Polymorphism' ? (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">🧬 Polymorphism in Object-Oriented Programming (OOP)</h2>
                      </div>

                      {/* Introduction */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <p>Polymorphism is the ability of different objects to respond differently to the same message (function call). It allows functions or methods to behave differently based on the object that invokes them, promoting flexibility and scalability in object-oriented systems.</p>
                        <p className="mt-2">In simple terms, polymorphism means "many forms", and in programming, it allows for different forms of behavior using the same interface.</p>
                      </div>

                      {/* Types of Polymorphism */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🎭</span> Types of Polymorphism</h3>
                        <div className="mb-4">
                          <h4 className="font-semibold text-blue-600 mb-1">1. Compile-Time Polymorphism (Static Binding / Early Binding)</h4>
                          <p>Occurs when the method to be executed is determined at compile time.<br/>It is achieved through function overloading and operator overloading.</p>
                          <div className="mt-2 font-semibold text-slate-700">✅ Example: Function Overloading</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Print {
public:
    void show(int x) {
        cout << "Integer: " << x << endl;
    }
    void show(double y) {
        cout << "Double: " << y << endl;
    }
};`}</pre>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-blue-600 mb-1">2. Run-Time Polymorphism (Dynamic Binding / Late Binding)</h4>
                          <p>Occurs when the method to be executed is determined at runtime using base class pointers or references.<br/>It is achieved through method overriding with the help of virtual functions.</p>
                          <div className="mt-2 font-semibold text-slate-700">✅ Example: Function Overriding</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Animal {
public:
    virtual void speak() {
        cout << "Animal speaks" << endl;
    }
};
class Dog : public Animal {
public:
    void speak() override {
        cout << "Dog barks" << endl;
    }
};`}</pre>
                        </div>
                      </div>

                      {/* Overloading vs Overriding Table */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>📌</span> Overloading vs Overriding</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-[340px] w-full border border-slate-300 rounded-xl text-sm bg-white">
                            <thead>
                              <tr className="bg-indigo-100 text-indigo-700">
                                <th className="px-3 py-2 border-b">Feature</th>
                                <th className="px-3 py-2 border-b">Overloading</th>
                                <th className="px-3 py-2 border-b">Overriding</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-3 py-2 border-b">Binding Time</td>
                                <td className="px-3 py-2 border-b">Compile-time</td>
                                <td className="px-3 py-2 border-b">Run-time</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Scope</td>
                                <td className="px-3 py-2 border-b">Same class</td>
                                <td className="px-3 py-2 border-b">Base and derived class</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Method Signature</td>
                                <td className="px-3 py-2 border-b">Must differ</td>
                                <td className="px-3 py-2 border-b">Must be the same</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">Inheritance</td>
                                <td className="px-3 py-2">Not required</td>
                                <td className="px-3 py-2">Requires inheritance</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Virtual Functions in C++ */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>💡</span> Virtual Functions in C++</h3>
                        <div className="mb-4">
                          <h4 className="font-semibold text-blue-600 mb-1">🔹 virtual Keyword</h4>
                          <p>Used in base class to allow dynamic dispatch at runtime.<br/>When a function is marked virtual, C++ uses a vtable to resolve the function call dynamically.</p>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Base {
public:
    virtual void display() {
        cout << "Base display" << endl;
    }
};`}</pre>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-blue-600 mb-1">🔹 Pure Virtual Function</h4>
                          <p>A virtual function with no implementation in the base class.<br/>Makes a class abstract, i.e., cannot be instantiated.</p>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Shape {
public:
    virtual void draw() = 0;  // Pure virtual function
};`}</pre>
                        </div>
                      </div>

                      {/* Operator Overloading */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>➕</span> Operator Overloading</h3>
                        <p>C++ allows redefining how operators behave with user-defined types.<br/>This is a form of compile-time polymorphism.</p>
                        <div className="mt-2 font-semibold text-slate-700">✅ Example: Custom Operator Overloading</div>
                        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Complex {
public:
    int real, imag;
    Complex(int r, int i) : real(r), imag(i) {}
    Complex operator + (const Complex& other) {
        return Complex(real + other.real, imag + other.imag);
    }
};`}</pre>
                      </div>

                      {/* Interview Takeaways */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-green-700 flex items-center gap-2 mb-2"><span>🧠</span> Key Interview Takeaways</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Use compile-time polymorphism when behavior can be resolved at compile time (e.g., overloading).</li>
                          <li>Use run-time polymorphism to allow behavior to be determined dynamically via base class pointers.</li>
                          <li>Prefer virtual functions when designing extensible and pluggable architectures.</li>
                          <li>Overriding is central to achieving polymorphic behavior in inheritance.</li>
                          <li>Pure virtual functions are useful for enforcing interface-like behavior in abstract base classes.</li>
                          <li>Operator overloading enhances class usability and syntactic clarity in mathematical types.</li>
                        </ul>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Abstract Classes and Interfaces' ? (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">Abstract Classes and Interfaces: Core OOP Design Tools</h2>
                      </div>

                      {/* Introduction */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <p>Abstract classes and interfaces are fundamental constructs in Object-Oriented Programming (OOP) used to design scalable and maintainable systems. They serve as blueprints for other classes and enforce a common interface for derived classes, promoting polymorphism, abstraction, and code reusability.</p>
                      </div>

                      {/* Abstract Classes */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>📘</span> Abstract Classes</h3>
                        <p>An <b>abstract class</b> is a class that cannot be instantiated directly and is designed to be inherited by subclasses. It may contain abstract methods (pure virtual functions in C++) — methods without implementation — along with concrete methods having full definitions.</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Declared using the <b>abstract</b> keyword in languages like Java or having at least one pure virtual function (<code>virtual void f() = 0;</code>) in C++.</li>
                          <li>Enforces a common interface for all derived classes.</li>
                          <li>May contain constructors, destructors, data members, and fully defined methods.</li>
                          <li>Used when partially implementing behavior while leaving specific functionality to subclasses.</li>
                        </ul>
                        <div className="mt-4 font-semibold text-slate-700">C++ Example:</div>
                        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Shape {
public:
    virtual void draw() = 0; // Pure virtual function
    void move() { /* ... */ } // Concrete method
};`}</pre>
                      </div>

                      {/* Interfaces */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🔗</span> Interfaces</h3>
                        <p>An <b>interface</b> is a completely abstract class that defines only abstract methods (although newer versions of Java allow default and static methods). It acts as a contract that classes agree to fulfill.</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Defines a set of method signatures that implementing classes must override.</li>
                          <li>Cannot contain constructors or state (variables in interfaces are public static final).</li>
                          <li>Multiple interfaces can be implemented by a single class (solves the diamond problem in multiple inheritance).</li>
                          <li>In C++, pure abstract classes (all methods are pure virtual) serve the same role as interfaces.</li>
                        </ul>
                        <div className="mt-4 font-semibold text-slate-700">C++ Example:</div>
                        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Flyable {
public:
    virtual void fly() = 0;
};

class Swimmable {
public:
    virtual void swim() = 0;
};

class Duck : public Flyable, public Swimmable {
public:
    void fly() override { /* ... */ }
    void swim() override { /* ... */ }
};`}</pre>
                      </div>

                      {/* Differences Table */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🆚</span> Differences: Abstract Class vs Interface</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-[340px] w-full border border-slate-300 rounded-xl text-sm bg-white">
                            <thead>
                              <tr className="bg-indigo-100 text-indigo-700">
                                <th className="px-3 py-2 border-b">Feature</th>
                                <th className="px-3 py-2 border-b">Abstract Class</th>
                                <th className="px-3 py-2 border-b">Interface</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-3 py-2 border-b">Methods</td>
                                <td className="px-3 py-2 border-b">Can have both abstract and concrete</td>
                                <td className="px-3 py-2 border-b">All methods are abstract (by default)</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Variables</td>
                                <td className="px-3 py-2 border-b">Can have instance variables</td>
                                <td className="px-3 py-2 border-b">Only constants (public static final)</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Inheritance</td>
                                <td className="px-3 py-2 border-b">Single inheritance</td>
                                <td className="px-3 py-2 border-b">Multiple inheritance supported</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Access Modifiers</td>
                                <td className="px-3 py-2 border-b">Can use private/protected/public</td>
                                <td className="px-3 py-2 border-b">Methods are public by default</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">Constructors</td>
                                <td className="px-3 py-2">Allowed</td>
                                <td className="px-3 py-2">Not allowed</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Interview-Relevant Concepts */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>💡</span> Interview-Relevant Concepts</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Abstract methods are implicitly virtual — they must be overridden in the derived class.</li>
                          <li>Cannot instantiate abstract classes or interfaces directly.</li>
                          <li>Subclasses must implement all abstract methods, or themselves become abstract.</li>
                          <li>Multiple inheritance through interfaces (e.g., <code>class A : public I1, public I2 {'{}'}</code> in C++) avoids the diamond problem as no state or implementation is inherited.</li>
                          <li><b>Interface Segregation Principle (ISP):</b> A class should not be forced to implement methods it does not use. Splitting interfaces improves modularity and testability.</li>
                          <li><b>Interface as a Contract:</b> Changing method signatures or removing methods in an interface can cause breaking changes in all implementing classes — hence, interfaces must be versioned and managed carefully in large systems.</li>
                        </ul>
                      </div>

                      {/* Summary */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-green-700 flex items-center gap-2 mb-2"><span>✅</span> Summary</h3>
                        <p>Abstract classes and interfaces provide a solid foundation for designing flexible systems that follow OOP principles. Abstract classes offer a base for shared behavior with enforced structure, while interfaces define pure capabilities. Understanding when to use each and how they affect inheritance, polymorphism, and code design is critical for acing interviews and writing maintainable software.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Exception Handling and Resource Management' ? (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">Exception Handling and Resource Management in OOP</h2>
                      </div>

                      {/* Introduction */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <p>In Object-Oriented Programming (OOP), robustness and resource safety are essential. Exception handling and resource management ensure that a program can gracefully handle unexpected situations and release resources properly, avoiding memory leaks and undefined behavior.</p>
                      </div>

                      {/* Exception and Exception Handling */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🧨</span> Exception and Exception Handling</h3>
                        <p>An <b>exception</b> is an abnormal event or error condition that disrupts the normal flow of a program. Examples include divide-by-zero errors, null pointer dereferencing, or file-not-found errors.</p>
                        <p className="mt-2">Exception handling is a mechanism to detect and respond to runtime errors without crashing the program. It separates error-handling code from regular code, improving readability and maintainability.</p>
                        <div className="mt-4">
                          <h4 className="font-semibold text-blue-600 mb-1">�� Common terms:</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li><b>try:</b> Wraps the block of code that may throw an exception.</li>
                            <li><b>catch:</b> Catches and handles exceptions of specific types.</li>
                            <li><b>throw:</b> Used to signal the occurrence of an error.</li>
                            <li><b>finally</b> (in some languages): Executes code regardless of whether an exception occurred (not present in C++, replaced by RAII).</li>
                          </ul>
                        </div>
                        <div className="mt-2 text-yellow-700 bg-yellow-50 border-l-4 border-yellow-400 rounded p-2 text-sm">
                          🧠 <b>Interview Tip:</b> Languages like C++ require manual memory management alongside exception handling, making RAII (Resource Acquisition Is Initialization) a critical concept. In contrast, Java, Python, and C# include automatic garbage collection, focusing more on handling logic errors and resource closing.
                        </div>
                      </div>

                      {/* Resource Management */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>♻️</span> Resource Management</h3>
                        <p>In OOP, resources such as memory, file handles, sockets, and database connections must be managed correctly.</p>
                        <div className="mt-4">
                          <h4 className="font-semibold text-blue-600 mb-1">🔹 C++: RAII</h4>
                          <p>RAII binds the lifecycle of a resource to an object. When the object goes out of scope, its destructor is automatically called, releasing the resource.</p>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`{
    std::fstream file("data.txt");
    // file is automatically closed when it goes out of scope
}`}</pre>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-semibold text-blue-600 mb-1">🔹 Java/.NET: Garbage Collection</h4>
                          <p>Languages like Java and C# use garbage collectors to automatically reclaim unused memory. However, developers must still release non-memory resources (e.g., closing file streams) manually or via constructs like try-with-resources or using.</p>
                        </div>
                      </div>

                      {/* Best Practices in Exception Handling */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>🧾</span> Best Practices in Exception Handling (Interview-Centric)</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Catch specific exceptions, not generic ones.</li>
                          <li>Never ignore caught exceptions (<code>catch (...) {'{}'}</code> in C++ is discouraged).</li>
                          <li>Use custom exception classes for clarity.</li>
                          <li>Avoid throwing exceptions from destructors in C++ (may cause termination).</li>
                          <li>In multi-threaded programs, handle exceptions in each thread separately.</li>
                        </ul>
                      </div>

                      {/* Key Differences Table */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2"><span>⚠️</span> Key Differences (Language-Specific)</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-[340px] w-full border border-slate-300 rounded-xl text-sm bg-white">
                            <thead>
                              <tr className="bg-indigo-100 text-indigo-700">
                                <th className="px-3 py-2 border-b">Feature</th>
                                <th className="px-3 py-2 border-b">C++</th>
                                <th className="px-3 py-2 border-b">Java</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-3 py-2 border-b">Memory Management</td>
                                <td className="px-3 py-2 border-b">Manual</td>
                                <td className="px-3 py-2 border-b">Garbage Collected</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">RAII Support</td>
                                <td className="px-3 py-2 border-b">Yes</td>
                                <td className="px-3 py-2 border-b">No (manual resource handling)</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Checked Exceptions</td>
                                <td className="px-3 py-2 border-b">No</td>
                                <td className="px-3 py-2 border-b">Yes</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">finally Keyword</td>
                                <td className="px-3 py-2 border-b">No</td>
                                <td className="px-3 py-2 border-b">Yes</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">Destructor</td>
                                <td className="px-3 py-2">Used for cleanup</td>
                                <td className="px-3 py-2">Not guaranteed immediately</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-green-700 flex items-center gap-2 mb-2"><span>✅</span> Summary</h3>
                        <p>Exception handling ensures error resilience and separates logic from error-handling code.</p>
                        <p>Resource management ensures system resources are released timely to avoid leaks or deadlocks.</p>
                        <p className="mt-2">Mastery of these concepts is essential for writing robust, maintainable, and scalable OOP applications and is frequently tested in interviews for both low-level systems and high-level application roles.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Advanced OOPs Concepts' ? (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">🔹 Advanced OOPS Concepts – Interview Theory</h2>
                      </div>

                      {/* Can a C++/Java Program Run Without OOP? */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">1. Can a C++/Java Program Run Without OOP?</h3>
                        <p>Yes. Both C++ and Java support procedural programming styles. For example:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>In C++, we can write programs with only <code>main()</code> and procedural logic.</li>
                          <li>In Java, while everything must be inside a class, we can simulate procedural code using static methods inside a class (e.g., <code>public static void main()</code>).</li>
                        </ul>
                        <p className="mt-2">However, OOP is essential for modularity, scalability, and reuse, especially in large-scale applications.</p>
                      </div>

                      {/* Static Methods and Static Classes */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">2. Static Methods and Static Classes</h3>
                        <p>Static methods belong to the class rather than instances. They can be called using the class name and cannot access non-static (instance) data directly.</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>Static classes:</b></li>
                          <li>In Java, nested classes can be declared static. These don't require an instance of the outer class.</li>
                          <li>In C++, all classes are inherently non-static. You can simulate static-only behavior using static data and private constructors.</li>
                        </ul>
                        <div className="mt-2">🔸 <b>Use case:</b> Utility/helper functions that don't depend on instance state.</div>
                      </div>

                      {/* Singleton Design Pattern */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">3. Singleton Design Pattern</h3>
                        <p>The Singleton ensures that a class has only one instance and provides a global point of access to it.</p>
                        <div className="mt-4 font-semibold text-slate-700">Java Version:</div>
                        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`public class Singleton {
    private static Singleton instance = null;
    private Singleton() {} // private constructor
    public static Singleton getInstance() {
        if(instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}`}</pre>
                        <div className="mt-2">Why it's asked: Singleton is a classic design pattern for shared resources (e.g., DB connections, configuration manager).</div>
                      </div>

                      {/* Dependency Injection */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">4. Dependency Injection (DI) – Brief Overview</h3>
                        <p>Dependency Injection is a design pattern where an object receives its dependencies from external sources, rather than creating them internally.</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Constructor Injection</li>
                          <li>Setter Injection</li>
                          <li>Interface Injection</li>
                        </ul>
                        <div className="mt-2">🔸 <b>Interview relevance:</b> DI improves testability, flexibility, and decoupling.</div>
                      </div>

                      {/* Composition vs Inheritance */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">5. Composition vs Inheritance</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>Inheritance:</b> "Is-a" relationship. It promotes reuse by deriving new classes from existing ones.</li>
                          <li><b>Composition:</b> "Has-a" relationship. One class contains another and delegates behavior.</li>
                        </ul>
                        <div className="mt-2">💡 <b>Best Practice:</b> Favor composition over inheritance for flexibility and maintainability.</div>
                      </div>

                      {/* 5 Code Questions (with Answers) */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">🔸 5 Code Questions (with Answers)</h3>
                        {/* Q1 */}
                        <div className="mb-4">
                          <div className="font-semibold text-slate-700 mb-1">Q1: What will be the output?</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Test {
public:
    static void show() { cout << "Static Show"; }
    void display() { cout << "Instance Display"; }
};

int main() {
    Test* t = NULL;
    t->show();   // Line A
    // t->display(); // Line B (commented)
}`}</pre>
                          <div className="mt-1">Answer: <b>Static Show</b></div>
                          <div className="text-slate-600 text-sm">Reason: Static methods are resolved at compile time. Even with a null pointer, show() doesn't access instance memory.</div>
                        </div>
                        {/* Q2 */}
                        <div className="mb-4">
                          <div className="font-semibold text-slate-700 mb-1">Q2: Output?</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class A {
    static { System.out.println("Static Block"); }
    public static void main(String[] args) {
        System.out.println("Main Method");
    }
}`}</pre>
                          <div className="mt-1">Output:</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`Static Block
Main Method`}</pre>
                          <div className="text-slate-600 text-sm">Reason: Static blocks execute once when the class is loaded.</div>
                        </div>
                        {/* Q3 */}
                        <div className="mb-4">
                          <div className="font-semibold text-slate-700 mb-1">Q3: Output?</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class Parent {
    void show() { System.out.println("Parent"); }
}
class Child extends Parent {
    static void show() { System.out.println("Child"); }
    public static void main(String[] args) {
        Parent obj = new Child();
        obj.show();
    }
}`}</pre>
                          <div className="mt-1">Output: <b>Parent</b></div>
                          <div className="text-slate-600 text-sm">Reason: show() in Child is static, so it's not overridden but hidden. obj.show() calls Parent's method.</div>
                        </div>
                        {/* Q4 */}
                        <div className="mb-4">
                          <div className="font-semibold text-slate-700 mb-1">Q4: Output?</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`class A {
public:
    virtual void fun() = 0;
    void say() { cout << "Hello"; }
};

class B : public A {
public:
    void fun() { cout << "Fun"; }
};

int main() {
    B b;
    b.say(); b.fun();
}`}</pre>
                          <div className="mt-1">Output: <b>HelloFun</b></div>
                          <div className="text-slate-600 text-sm">Reason: Abstract class A provides a concrete method say(). Class B implements fun(). Fully valid.</div>
                        </div>
                        {/* Q5 */}
                        <div className="mb-4">
                          <div className="font-semibold text-slate-700 mb-1">Q5: Output?</div>
                          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">{`interface X {
    default void print() {
        System.out.println("X");
    }
}

interface Y {
    default void print() {
        System.out.println("Y");
    }
}

class Z implements X, Y {
    public void print() {
        X.super.print();
    }
    public static void main(String[] args) {
        new Z().print();
    }
}`}</pre>
                          <div className="mt-1">Output: <b>X</b></div>
                          <div className="text-slate-600 text-sm">Reason: Diamond problem resolved using explicit interface call (X.super.print()).</div>
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-green-700 flex items-center gap-2 mb-2"><span>✅</span> Summary</h3>
                        <p>Advanced OOP concepts test a developer's depth of understanding, design approach, and practical experience. Focus on:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Static behavior</li>
                          <li>Design patterns (Singleton)</li>
                          <li>Modern design principles (DI, composition)</li>
                          <li>Code interpretation</li>
                        </ul>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'OOPs in Practice' ? (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">🔹 Chapter 11: OOPs in Practice</h2>
                      </div>

                      {/* Introduction */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <p>Object-Oriented Programming in real-world systems is more than just syntax — it's about modeling the real world and writing maintainable, scalable code. This chapter focuses on translating OOP principles into effective design practices.</p>
                      </div>

                      {/* Library System Example */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">✅ Designing a Library System using OOP:</h3>
                        <div className="mb-2 font-semibold">Entities:</div>
                        <ul className="list-disc pl-6 space-y-1 mb-2">
                          <li>Book, User, Librarian, Catalog, Library, Loan, Reservation</li>
                        </ul>
                        <div className="mb-2 font-semibold">Key Classes:</div>
                        <ul className="list-disc pl-6 space-y-1 mb-2">
                          <li><b>Book:</b> Attributes like title, author, ISBN, availability status</li>
                          <li><b>User:</b> General user with borrowed books and fine tracking</li>
                          <li><b>Librarian:</b> Inherits from User, with extra permissions</li>
                          <li><b>Catalog:</b> Helps search books by title, author, or category</li>
                          <li><b>Library:</b> Manages overall system — books, members, loans, and notifications</li>
                          <li><b>Loan & Reservation:</b> Track borrowing and reservation info</li>
                        </ul>
                        <div className="mb-2 font-semibold">Design Concepts Used:</div>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Encapsulation to hide book data and expose relevant methods.</li>
                          <li>Inheritance for common user roles.</li>
                          <li>Polymorphism for handling user-specific actions.</li>
                          <li>Composition to manage books via Catalog within Library.</li>
                          <li>Access Specifiers to protect internal data (e.g., private book ID).</li>
                        </ul>
                      </div>

                      {/* Parking Lot Example */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">✅ Designing a Parking Lot using OOP:</h3>
                        <div className="mb-2 font-semibold">Entities:</div>
                        <ul className="list-disc pl-6 space-y-1 mb-2">
                          <li>ParkingLot, ParkingSpot, Vehicle, Ticket, Gate, DisplayBoard, Payment</li>
                        </ul>
                        <div className="mb-2 font-semibold">Key Classes:</div>
                        <ul className="list-disc pl-6 space-y-1 mb-2">
                          <li><b>Vehicle:</b> Subclasses like Car, Bike, Truck</li>
                          <li><b>ParkingSpot:</b> Subtypes based on vehicle type</li>
                          <li><b>ParkingLot:</b> Contains floors and spots, assigns and tracks availability</li>
                          <li><b>Ticket:</b> Time of entry, spot, vehicle, etc.</li>
                          <li><b>Payment:</b> Calculates amount and tracks status</li>
                        </ul>
                        <div className="mb-2 font-semibold">Design Concepts Used:</div>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Polymorphism to differentiate parking logic per vehicle type.</li>
                          <li>Composition to include multiple floors/spots in the ParkingLot.</li>
                          <li>Encapsulation to ensure spot assignment is safe and controlled.</li>
                          <li>Interfaces (e.g., Payable) for supporting multiple payment methods.</li>
                        </ul>
                      </div>

                      {/* Composition Over Inheritance */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">✅ Why Prefer Composition Over Inheritance?</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Inheritance creates tight coupling between base and child classes. Changes in the base class affect all derived ones.</li>
                          <li>Composition promotes flexibility. One class uses functionality of another through object references (has-a relationship), not is-a.</li>
                          <li>Easier to replace or mock components for testing.</li>
                          <li>Example: A Car has an Engine (composition) rather than is an Engine (inheritance).</li>
                        </ul>
                      </div>

                      {/* Access Specifiers Impact */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">✅ How Access Specifiers Impact Design:</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Public methods define the API surface for objects. Misuse can lead to bugs.</li>
                          <li>Private data enforces encapsulation, restricting direct access to critical internals.</li>
                          <li>Protected helps during inheritance but may leak internals.</li>
                          <li>Thoughtful use ensures robust, modular, and testable designs.</li>
                        </ul>
                      </div>

                      {/* Interface vs Abstract Class Table */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">✅ Real-world Usage: Interface vs Abstract Class</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-[340px] w-full border border-slate-300 rounded-xl text-sm bg-white">
                            <thead>
                              <tr className="bg-indigo-100 text-indigo-700">
                                <th className="px-3 py-2 border-b">Criteria</th>
                                <th className="px-3 py-2 border-b">Interface</th>
                                <th className="px-3 py-2 border-b">Abstract Class</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-3 py-2 border-b">Purpose</td>
                                <td className="px-3 py-2 border-b">Define contract</td>
                                <td className="px-3 py-2 border-b">Define partial implementation</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Inheritance</td>
                                <td className="px-3 py-2 border-b">Multiple</td>
                                <td className="px-3 py-2 border-b">Single</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 border-b">Use case</td>
                                <td className="px-3 py-2 border-b">Unrelated classes needing same capability (e.g., Drivable, Serializable)</td>
                                <td className="px-3 py-2 border-b">Similar base class with default behavior</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-2">In Java/C#, use interfaces when behavior is shared across different hierarchies.<br/>Use abstract classes for shared base code with enforced structure.</p>
                      </div>

                      {/* SOLID Principles */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">✅ Applying SOLID Principles:</h3>
                        <p>Let's apply SOLID to a Banking Application:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>S – Single Responsibility:</b> TransactionLogger only logs transactions, TransactionManager handles business logic.</li>
                          <li><b>O – Open/Closed:</b> Add new NotificationChannel (SMS, Email) without modifying base logic.</li>
                          <li><b>L – Liskov Substitution:</b> Any Account subclass (e.g., SavingsAccount, CurrentAccount) should substitute without breaking logic.</li>
                          <li><b>I – Interface Segregation:</b> PrintableStatement and TransferableFunds are separate interfaces to avoid bloated ones.</li>
                          <li><b>D – Dependency Inversion:</b> High-level LoanService depends on InterestCalculator interface, not concrete classes.</li>
                        </ul>
                      </div>

                      {/* Conclusion */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-green-700 flex items-center gap-2 mb-2"><span>✅</span> Conclusion</h3>
                        <p>OOP in Practice is about more than just following rules — it's about applying principles to design clean, maintainable, and extensible systems. Think in terms of entities, relationships, responsibilities, and behavior. Design systems with the long-term in mind — the real goal of OOP isn't code reusability, it's change-resilience.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Relevant Interview Questions' ? (
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">Relevant Interview Questions</h2>
                      </div>

                      {/* Chapter 1 */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 mb-2">🔹 Chapter 1: Introduction to OOPs</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Lays the foundation and explains why OOP exists.</li>
                          <li>What is Object-Oriented Programming (OOPs)?</li>
                          <li>Why do we need OOPs?</li>
                          <li>What are some commonly used Object-Oriented Programming Languages?</li>
                          <li>What other paradigms of programming exist besides OOPs?</li>
                          <li>What is Structured Programming?</li>
                          <li>What is the difference between Structured Programming and Object-Oriented Programming?</li>
                          <li>Why is OOPs so popular?</li>
                          <li>What are the advantages and disadvantages of OOPs?</li>
                        </ul>
                      </div>

                      {/* Chapter 2 */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 mb-2">🔹 Chapter 2: OOPs Principles and Pillars</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Introduces the four core principles (APIE) and key features.</li>
                          <li>What are the main features/pillars of OOPs? (Abstraction, Polymorphism, Inheritance, Encapsulation)</li>
                          <li>What is Encapsulation?</li>
                          <li>What is Abstraction?</li>
                          <li>Abstraction vs Encapsulation</li>
                          <li>What is Inheritance? Explain with an example.</li>
                          <li>What is Polymorphism?</li>
                          <li>Can we implement polymorphism without inheritance?</li>
                        </ul>
                      </div>

                      {/* Chapter 3 */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 mb-2">🔹 Chapter 3: Classes and Objects</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Focuses on the building blocks of OOP.</li>
                          <li>What is a Class?</li>
                          <li>What is an Object?</li>
                          <li>How much memory does a class occupy?</li>
                          <li>Is it always necessary to create objects from a class?</li>
                          <li>What is the difference between a structure and a class in C++?</li>
                        </ul>
                      </div>

                      {/* Chapter 4 */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 mb-2">🔹 Chapter 4: Constructors and Destructors</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Lifecycle of an object and memory management.</li>
                          <li>What is a Constructor?</li>
                          <li>What are the various types of constructors in C++?</li>
                          <li>What is a Copy Constructor?</li>
                          <li>Can we overload constructors?</li>
                          <li>What is a Destructor?</li>
                          <li>Can we overload a Destructor?</li>
                          <li>What is the purpose of a constructor and destructor?</li>
                        </ul>
                      </div>

                      {/* Chapter 5 */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 mb-2">🔹 Chapter 5: Access Control and Class Design</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Important for encapsulation and design flexibility.</li>
                          <li>What are access specifiers and their significance? (Public, Private, Protected)</li>
                          <li>What are friend functions and friend classes?</li>
                          <li>What is the this pointer?</li>
                          <li>Are class and structure the same?</li>
                        </ul>
                      </div>

                      {/* Chapter 6 */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 mb-2">🔹 Chapter 6: Inheritance </h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Code reuse and relationships between classes.</li>
                          <li>What is Inheritance?</li>
                          <li>What are the different types of Inheritance?</li>
                          <li>Single</li>
                          <li>Multilevel</li>
                          <li>Hierarchical</li>
                          <li>Multiple (C++), and Interfaces in Java</li>
                          <li>What are subclass and superclass?</li>
                          <li>Are there any limitations of Inheritance?</li>
                          <li>Can we do multiple inheritance with abstract classes?</li>
                        </ul>
                      </div>

                      {/* Chapter 7 */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 mb-2">🔹 Chapter 7: Polymorphism </h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Different forms of behavior using the same interface.</li>
                          <li>What is Polymorphism?</li>
                          <li>Types of Polymorphism: Static vs Dynamic</li>
                          <li>What is Compile-Time Polymorphism?</li>
                          <li>What is Runtime Polymorphism?</li>
                          <li>Difference between Overloading and Overriding</li>
                          <li>Overriding vs Overloading comparison</li>
                          <li>How does C++ support Polymorphism?</li>
                          <li>What is a virtual function and pure virtual function?</li>
                          <li>What is the virtual keyword?</li>
                          <li>What is operator overloading?</li>
                          <li>How to do custom operator overloading?</li>
                        </ul>
                      </div>

                      {/* Chapter 8 */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 mb-2">🔹 Chapter 8: Abstract Classes and Interfaces</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Must-know topics for interviews and design.</li>
                          <li>What is an abstract class?</li>
                          <li>Why do we need abstract classes?</li>
                          <li>How is an abstract class different from an interface?</li>
                          <li>Are abstract methods virtual?</li>
                          <li>Is it compulsory to implement abstract methods?</li>
                          <li>Can we create an instance of an abstract class?</li>
                          <li>What is an Interface?</li>
                          <li>Interface vs Abstract Class</li>
                          <li>Can we write logic in an interface?</li>
                          <li>Can we define private/protected/public methods in an interface?</li>
                          <li>Can we create an instance of an interface?</li>
                          <li>Explain multiple inheritance in interfaces</li>
                          <li>Interface Segregation Principle</li>
                          <li>Interface as a contract (impact analysis, change management, breaking changes)</li>
                        </ul>
                      </div>

                      {/* Chapter 9 */}
                      <div className="border border-slate-200 rounded-xl shadow-sm p-4 bg-white">
                        <h3 className="font-semibold text-indigo-600 mb-2">🔹 Chapter 9: Exception Handling and Resource Management</h3>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Covers error management in OOP.</li>
                          <li>What is an Exception?</li>
                          <li>What is Exception Handling?</li>
                          <li>What is Garbage Collection in OOP?</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="block font-medium text-indigo-500 mb-2">{topic}</span>
                      <span className="block">Topic content goes here... </span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const OOPS = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeFlowIdx, setActiveFlowIdx] = useState(null);
  const [openAccordionIdx, setOpenAccordionIdx] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-white to-blue-100 font-sans tracking-wide flex flex-col items-center">
      {/* Top Section: Heading */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center pt-10 pb-4 px-4 md:px-12 animate-fade-in">
        <div className="w-full text-center mb-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight drop-shadow-lg" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
            Object Oriented Programming (OOPS)
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-2 font-medium animate-slide-in-up">
            Master the core concepts of OOPS with a modern, structured flow
          </p>
        </div>
      </div>

      {/* Middle Section: Subject FlowBar */}
      {/* <section className="w-full max-w-screen-2xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-16 pb-10 animate-fade-in">
        <SubjectFlowBar topics={subjectFlowTopics} activeIdx={activeFlowIdx} setActiveIdx={setActiveFlowIdx} />
      </section> */}

      {/* Bottom Section: Accordion & Test Button */}
      <section className="w-full max-w-screen-2xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-16 pb-10 animate-fade-in">

        <Accordion topics={detailedTopics} openIdx={openAccordionIdx} setOpenIdx={setOpenAccordionIdx} />

        {/* Give Test Button */}
        <div className="w-full flex justify-center pt-12 pb-4">
          <button
            className="w-full max-w-md bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white text-2xl font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-indigo-400/40 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 hover:scale-105 active:scale-98 mt-4"
            style={{ boxShadow: '0 4px 32px 0 rgba(99,102,241,0.18), 0 1.5px 8px 0 rgba(59,130,246,0.10)' }}
            onClick={() => navigate('/quiz')}
          >
            <span className="inline-block animate-slide-in-up">Give Test</span>
          </button>
        </div>
      </section>

      {/* Animations & Custom Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 16px 4px #6366f1aa, 0 1.5px 8px 0 #3b82f680; }
          50% { box-shadow: 0 0 32px 8px #6366f1cc, 0 1.5px 8px 0 #3b82f6cc; }
          100% { box-shadow: 0 0 16px 4px #6366f1aa, 0 1.5px 8px 0 #3b82f680; }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }
        .neumorphic-glow {
          box-shadow: 0 4px 32px 0 rgba(99,102,241,0.18), 0 1.5px 8px 0 rgba(59,130,246,0.10);
        }
      `}</style>
    </div>
  );
};

export default OOPS;