import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const subjectFlowTopics = [
  'Fundamentals of DBMS & Architecture',
  'Data Modeling & Database Design',
  'Database Structure: Tables, Keys, and Constraints',
  'SQL Operations and Queries',
  'Data Normalization and Design Quality',
  'Transactions, Concurrency & Recovery',
  'Indexing & Query Optimization',
  'Procedural & Programmatic Features',
  'Storage, Backup & Data Warehousing',
  'Database Management & Administration',
];

const detailedTopics = [
  'Fundamentals of DBMS & Architecture',
  'Data Modeling & Database Design',
  'Database Structure: Tables, Keys, and Constraints',
  'SQL Operations and Queries',
  'Data Normalization and Design Quality',
  'Transactions, Concurrency & Recovery',
  'Indexing & Query Optimization',
  'Procedural & Programmatic Features',
  'Storage, Backup & Data Warehousing',
  'Database Management & Administration',
  'Most Relevant Interview Questions'
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
              style={{ boxShadow: activeIdx === idx ? '0 0 16px 4px #6366f1aa' : undefined }}
            >
              <span className="font-bold text-lg select-none">{idx + 1}</span>
            </span>
            {/* Label */}
            <span
              className={`mt-2 text-xs font-medium transition-colors duration-300 whitespace-nowrap ${
                activeIdx === idx
                  ? 'text-indigo-700'
                  : 'text-slate-800 group-hover:text-indigo-500'
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
                <div className="text-slate-800 text-base animate-fade-in">
                {topic === 'Fundamentals of DBMS & Architecture' ? (
  <div className="space-y-8">
    {/* Section Title */}
    <div className="flex items-center gap-4 mb-2">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-white shadow-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">Fundamentals of DBMS & Architecture</h2>
    </div>

    {/* 1. What is DBMS? */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-blue-700">What is DBMS?</span>
      </div>
      <p className="mb-2">DBMS stands for Database Management System. It is a software system designed to manage databases, allowing multiple users to access the same data simultaneously.</p>
    </div>

    {/* 2. Why use DBMS? */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-indigo-700">Why use DBMS?</span>
      </div>
      <p className="mb-2">DBMS provides a structured way to store, manage, and retrieve data efficiently. It supports multiple users, transactions, and complex queries, making it suitable for large-scale applications.</p>
    </div>

    {/* 3. DBMS vs Traditional File Systems */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-blue-700">DBMS vs Traditional File Systems</span>
      </div>
      <p className="mb-2">Traditional file systems are not designed for multi-user environments and do not support transactions. DBMS, on the other hand, provides a robust infrastructure for managing data, transactions, and concurrency.</p>
    </div>

    {/* 4. DBMS Architecture */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-indigo-700">DBMS Architecture</span>
      </div>
      <p className="mb-2">DBMS architecture typically includes several components:</p>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>User Interface: Allows users to interact with the DBMS</li>
        <li>Query Processor: Handles SQL queries and optimizes execution plans</li>
        <li>Transaction Manager: Manages transactions and concurrency control</li>
        <li>Storage Manager: Manages data storage and retrieval</li>
        <li>Buffer Manager: Manages data caching and buffer management</li>
        <li>Concurrency Control: Ensures data consistency in multi-user environments</li>
        <li>Recovery Manager: Manages transaction logs and recovery mechanisms</li>
        <li>Security Manager: Manages access control and data security</li>
      </ul>
    </div>

    {/* 5. DBMS Levels of Abstraction */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-indigo-700">DBMS Levels of Abstraction</span>
      </div>
      <p className="mb-2">There are several levels of abstraction in DBMS:</p>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Physical Level: Deals with data storage and retrieval</li>
        <li>Logical Level: Deals with data structures and relationships</li>
        <li>View Level: Deals with user-defined views and queries</li>
        <li>Application Level: Deals with user-defined applications and queries</li>
      </ul>
    </div>

    {/* 6. DBMS Components */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-indigo-700">DBMS Components</span>
      </div>
      <p className="mb-2">DBMS components include:</p>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Data Definition Language (DDL): Used to define database schema</li>
        <li>Data Manipulation Language (DML): Used to manipulate data</li>
        <li>Data Control Language (DCL): Used to manage permissions and access</li>
        <li>Transaction Control Language (TCL): Used to manage transactions</li>
        <li>Query Language: Used to retrieve data</li>
        <li>Concurrency Control Mechanisms: Used to manage concurrent access</li>
        <li>Recovery Mechanisms: Used to ensure data durability</li>
        <li>Security Mechanisms: Used to manage access control and data security</li>
      </ul>
    </div>

    {/* 7. DBMS vs RDBMS */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-blue-700">DBMS vs RDBMS</span>
      </div>
      <p className="mb-2">DBMS is a broader term that includes various types of database systems, while RDBMS specifically refers to relational database management systems.</p>
    </div>

    {/* 8. Types of DBMS */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-indigo-700">Types of DBMS</span>
      </div>
      <p className="mb-2">There are several types of DBMS, including:</p>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Relational DBMS: Uses tables and relationships</li>
        <li>Non-relational DBMS: Uses various data models (e.g., NoSQL)</li>
        <li>Object-oriented DBMS: Uses objects and classes</li>
        <li>Hierarchical DBMS: Uses a tree-like structure</li>
        <li>Network DBMS: Uses a graph-like structure</li>
      </ul>
    </div>

    {/* 9. DBMS vs File-Based Systems */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-blue-700">DBMS vs File-Based Systems</span>
      </div>
      <p className="mb-2">DBMS provides a structured and scalable way to manage data, while file-based systems are not designed for multi-user environments or transactions.</p>
    </div>

    {/* 10. 2-Tier vs 3-Tier Architecture */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-indigo-700">2-Tier vs 3-Tier Architecture</span>
      </div>
      <p className="mb-2">2-tier architecture involves a client-server model where the client handles user interface and business logic, and the server handles database operations. 3-tier architecture involves a client-server-database model where the client handles user interface, the server handles business logic and data processing, and the database handles data storage and retrieval.</p>
    </div>

    {/* Summary */}
    <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-cyan-100 rounded-xl p-4 shadow-inner border-l-4 border-blue-300">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">📌</span>
        <span className="font-semibold text-lg text-blue-700">Summary</span>
      </div>
      <ul className="list-disc pl-6 text-slate-700 text-sm">
        <li>DBMS provides a structured and scalable way to manage data</li>
        <li>It supports multiple users, transactions, and complex queries</li>
        <li>DBMS architecture includes several components for efficient data management</li>
        <li>Levels of abstraction in DBMS allow for different levels of interaction with the database</li>
        <li>DBMS vs traditional file systems: DBMS provides a robust infrastructure for managing data, transactions, and concurrency</li>
        <li>DBMS vs RDBMS: DBMS is a broader term that includes various types of database systems, while RDBMS specifically refers to relational database management systems</li>
        <li>Types of DBMS: There are several types of DBMS, including relational, non-relational, object-oriented, hierarchical, and network DBMS</li>
        <li>DBMS vs file-based systems: DBMS provides a structured and scalable way to manage data, while file-based systems are not designed for multi-user environments or transactions</li>
        <li>2-tier vs 3-tier architecture: 2-tier architecture involves a client-server model where the client handles user interface and business logic, and the server handles database operations. 3-tier architecture involves a client-server-database model where the client handles user interface, the server handles business logic and data processing, and the database handles data storage and retrieval</li>
      </ul>
    </div>
  </div>
) 
              
                  
                  : topic === 'Data Modeling & Database Design' ? (
                    <div className="space-y-8">
                      {/* Section Title */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-white shadow-lg">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">Data Modeling & Database Design</h2>
                      </div>

                      {/* What is Data Modeling? */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-green-600 text-xl">✅</span>
                          <span className="font-semibold text-lg text-blue-700">What is Data Modeling?</span>
                        </div>
                        <p className="mb-2">Data modeling is the process of creating a conceptual model for a database. It involves identifying the data requirements and relationships among data elements of a system to be represented in the database.</p>
                      </div>

                      {/* Core Data Modeling Concepts */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🛠️</span>
                          <span className="font-semibold text-lg text-indigo-700">Core Data Modeling Concepts</span>
                        </div>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-2 py-1 border-b">Concept</th>
                                <th className="px-2 py-1 border-b">Description</th>
                                <th className="px-2 py-1 border-b">Examples</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">Entity</td><td className="px-2 py-1">Represents a real-world object or concept</td><td className="px-2 py-1">Customer, Order, Product</td></tr>
                              <tr><td className="px-2 py-1">Attribute</td><td className="px-2 py-1">Represents a characteristic or property of an entity</td><td className="px-2 py-1">CustomerID, Name, Address</td></tr>
                              <tr><td className="px-2 py-1">Relationship</td><td className="px-2 py-1">Represents a connection between entities</td><td className="px-2 py-1">Customer-Order, Order-Product</td></tr>
                              <tr><td className="px-2 py-1">Cardinality</td><td className="px-2 py-1">Represents the number of instances of a relationship</td><td className="px-2 py-1">1:1, 1:N, M:N</td></tr>
                              <tr><td className="px-2 py-1">Entity Set</td><td className="px-2 py-1">Represents a collection of entities of the same type</td><td className="px-2 py-1">Customers, Orders, Products</td></tr>
                              <tr><td className="px-2 py-1">Relationship Set</td><td className="px-2 py-1">Represents a collection of relationships of the same type</td><td className="px-2 py-1">CustomerOrders, OrderProducts</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* ER Diagrams */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">📊</span>
                          <span className="font-semibold text-lg text-indigo-700">ER Diagrams</span>
                        </div>
                        <p className="mb-2">ER diagrams are a graphical representation of the data model. They help visualize the relationships between entities and attributes.</p>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-2 py-1 border-b">Entity</th>
                                <th className="px-2 py-1 border-b">Attributes</th>
                                <th className="px-2 py-1 border-b">Relationships</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">Customer</td><td className="px-2 py-1">CustomerID, Name, Address</td><td className="px-2 py-1">Customer-Order</td></tr>
                              <tr><td className="px-2 py-1">Order</td><td className="px-2 py-1">OrderID, CustomerID, ProductID, Quantity, Date</td><td className="px-2 py-1">Customer-Order</td></tr>
                              <tr><td className="px-2 py-1">Product</td><td className="px-2 py-1">ProductID, Name, Price</td><td className="px-2 py-1">Order-Product</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Normalization */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🔧</span>
                          <span className="font-semibold text-lg text-blue-700">Normalization</span>
                        </div>
                        <p className="mb-2">Normalization is the process of organizing data in a database to minimize redundancy and dependency.</p>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-blue-50 text-blue-700">
                                <th className="px-2 py-1 border-b">Normal Form</th>
                                <th className="px-2 py-1 border-b">Eliminates</th>
                                <th className="px-2 py-1 border-b">Example Problem</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">1NF</td><td className="px-2 py-1">Repeating/multivalued fields</td><td className="px-2 py-1">Pen, Pencil in one column</td></tr>
                              <tr><td className="px-2 py-1">2NF</td><td className="px-2 py-1">Partial dependencies</td><td className="px-2 py-1">CustomerName depends on OrderID</td></tr>
                              <tr><td className="px-2 py-1">3NF</td><td className="px-2 py-1">Transitive dependencies</td><td className="px-2 py-1">DeptName depends on DeptID</td></tr>
                              <tr><td className="px-2 py-1">BCNF</td><td className="px-2 py-1">Non-key determinants</td><td className="px-2 py-1">Teacher → Room</td></tr>
                              <tr><td className="px-2 py-1">4NF</td><td className="px-2 py-1">Multivalued dependencies</td><td className="px-2 py-1">Student has many hobbies & languages</td></tr>
                              <tr><td className="px-2 py-1">5NF</td><td className="px-2 py-1">Join dependencies</td><td className="px-2 py-1">Supplier-Part-Project issue</td></tr>
                              <tr><td className="px-2 py-1">6NF</td><td className="px-2 py-1">Temporal data anomalies</td><td className="px-2 py-1">Timestamped fact tables</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Denormalization */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🔁</span>
                          <span className="font-semibold text-lg text-blue-700">What is Denormalization?</span>
                        </div>
                        <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
                          <li>Combining normalized tables to improve read performance and reduce joins</li>
                          <li>Used in analytics and reporting systems (OLAP)</li>
                        </ul>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-blue-50 text-blue-700">
                                <th className="px-2 py-1 border-b">Normalization</th>
                                <th className="px-2 py-1 border-b">Denormalization</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">Removes redundancy</td><td className="px-2 py-1">Introduces controlled redundancy</td></tr>
                              <tr><td className="px-2 py-1">More write efficient</td><td className="px-2 py-1">More read efficient</td></tr>
                              <tr><td className="px-2 py-1">Complex joins in queries</td><td className="px-2 py-1">Fewer joins</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Data Redundancy */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🚨</span>
                          <span className="font-semibold text-lg text-indigo-700">What is Data Redundancy?</span>
                        </div>
                        <p className="mb-2">Data redundancy occurs when the same piece of data exists in multiple places in a database.</p>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-2 py-1 border-b">EmpID</th>
                                <th className="px-2 py-1 border-b">EmpName</th>
                                <th className="px-2 py-1 border-b">DeptName</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">HR</td></tr>
                              <tr><td className="px-2 py-1">2</td><td className="px-2 py-1">Bob</td><td className="px-2 py-1">HR</td></tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-slate-700 text-sm mb-2">Redundancy: HR is repeated.</p>
                        <p className="text-green-700 text-sm font-semibold">✅ Solution: Normalize using separate Department table.</p>
                      </div>

                      {/* Normal Forms in Detail */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🔧</span>
                          <span className="font-semibold text-lg text-blue-700">Normal Forms in Detail (with Examples)</span>
                        </div>
                        <p className="mb-2">Let's normalize the following unstructured table (UNF) step by step:</p>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-blue-50 text-blue-700">
                                <th className="px-2 py-1 border-b">OrderID</th>
                                <th className="px-2 py-1 border-b">CustomerName</th>
                                <th className="px-2 py-1 border-b">Product</th>
                                <th className="px-2 py-1 border-b">Quantity</th>
                                <th className="px-2 py-1 border-b">DeliveryDate</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Pen, Pencil</td><td className="px-2 py-1">2, 3</td><td className="px-2 py-1">2024-01-01</td></tr>
                              <tr><td className="px-2 py-1">2</td><td className="px-2 py-1">Bob</td><td className="px-2 py-1">Notebook</td><td className="px-2 py-1">5</td><td className="px-2 py-1">2024-01-02</td></tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="font-semibold text-blue-700 mb-1">✅ 1NF – First Normal Form</div>
                        <p className="mb-2">Goal: Eliminate multivalued attributes.<br/>Rule: Each column must contain atomic (indivisible) values.</p>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-blue-50 text-blue-700">
                                <th className="px-2 py-1 border-b">OrderID</th>
                                <th className="px-2 py-1 border-b">CustomerName</th>
                                <th className="px-2 py-1 border-b">Product</th>
                                <th className="px-2 py-1 border-b">Quantity</th>
                                <th className="px-2 py-1 border-b">DeliveryDate</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Pen</td><td className="px-2 py-1">2</td><td className="px-2 py-1">2024-01-01</td></tr>
                              <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Pencil</td><td className="px-2 py-1">3</td><td className="px-2 py-1">2024-01-01</td></tr>
                              <tr><td className="px-2 py-1">2</td><td className="px-2 py-1">Bob</td><td className="px-2 py-1">Notebook</td><td className="px-2 py-1">5</td><td className="px-2 py-1">2024-01-02</td></tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="font-semibold text-blue-700 mb-1">✅ 2NF – Second Normal Form</div>
                        <p className="mb-2">Goal: Remove partial dependencies.<br/>Rule: Must be in 1NF and every non-prime attribute should be fully functionally dependent on the whole primary key.</p>
                        <div className="bg-blue-50 rounded-lg p-3 mb-2">
                          <span className="font-semibold text-blue-700">🧠 Primary Key = (OrderID, Product)</span><br/>
                          <span className="text-slate-700">Problem: CustomerName and DeliveryDate depend only on OrderID.</span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-2">
                          <div className="flex-1">
                            <span className="font-semibold text-blue-700">Order Table:</span>
                            <table className="min-w-[220px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
                              <thead>
                                <tr className="bg-blue-50 text-blue-700">
                                  <th className="px-2 py-1 border-b">OrderID</th>
                                  <th className="px-2 py-1 border-b">CustomerName</th>
                                  <th className="px-2 py-1 border-b">DeliveryDate</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">2024-01-01</td></tr>
                                <tr><td className="px-2 py-1">2</td><td className="px-2 py-1">Bob</td><td className="px-2 py-1">2024-01-02</td></tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-blue-700">OrderDetails Table:</span>
                            <table className="min-w-[220px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
                              <thead>
                                <tr className="bg-blue-50 text-blue-700">
                                  <th className="px-2 py-1 border-b">OrderID</th>
                                  <th className="px-2 py-1 border-b">Product</th>
                                  <th className="px-2 py-1 border-b">Quantity</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Pen</td><td className="px-2 py-1">2</td></tr>
                                <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Pencil</td><td className="px-2 py-1">3</td></tr>
                                <tr><td className="px-2 py-1">2</td><td className="px-2 py-1">Notebook</td><td className="px-2 py-1">5</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="font-semibold text-blue-700 mb-1">✅ 3NF – Third Normal Form</div>
                        <p className="mb-2">Goal: Remove transitive dependencies.<br/>Rule: Must be in 2NF, and no non-prime attribute should depend on another non-prime attribute.</p>
                        <div className="bg-blue-50 rounded-lg p-3 mb-2">
                          <span className="font-semibold text-blue-700">🔁 What is a Transitive Dependency?</span><br/>
                          <span className="text-slate-700">A → B and B → C implies A → C</span>
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold text-blue-700">Problem Example:</span>
                          <table className="min-w-[220px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
                            <thead>
                              <tr className="bg-blue-50 text-blue-700">
                                <th className="px-2 py-1 border-b">EmpID</th>
                                <th className="px-2 py-1 border-b">EmpName</th>
                                <th className="px-2 py-1 border-b">DeptID</th>
                                <th className="px-2 py-1 border-b">DeptName</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">D1</td><td className="px-2 py-1">HR</td></tr>
                            </tbody>
                          </table>
                          <span className="text-slate-700 text-sm">EmpID → DeptID (direct)<br/>DeptID → DeptName (indirect)<br/>So: EmpID → DeptName (transitive)</span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-2">
                          <div className="flex-1">
                            <span className="font-semibold text-blue-700">Employees Table:</span>
                            <table className="min-w-[180px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
                              <thead>
                                <tr className="bg-blue-50 text-blue-700">
                                  <th className="px-2 py-1 border-b">EmpID</th>
                                  <th className="px-2 py-1 border-b">EmpName</th>
                                  <th className="px-2 py-1 border-b">DeptID</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">D1</td></tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-blue-700">Departments Table:</span>
                            <table className="min-w-[140px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
                              <thead>
                                <tr className="bg-blue-50 text-blue-700">
                                  <th className="px-2 py-1 border-b">DeptID</th>
                                  <th className="px-2 py-1 border-b">DeptName</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr><td className="px-2 py-1">D1</td><td className="px-2 py-1">HR</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="font-semibold text-blue-700 mb-1">✅ BCNF – Boyce-Codd Normal Form</div>
                        <p className="mb-2">Goal: Remove non-key dependencies.<br/>Rule: Every determinant must be a candidate key.</p>
                        <div className="mb-2">
                          <span className="font-semibold text-blue-700">Problem Example:</span>
                          <table className="min-w-[220px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
                            <thead>
                              <tr className="bg-blue-50 text-blue-700">
                                <th className="px-2 py-1 border-b">Subject</th>
                                <th className="px-2 py-1 border-b">Teacher</th>
                                <th className="px-2 py-1 border-b">Room</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">Math</td><td className="px-2 py-1">Prof. A</td><td className="px-2 py-1">R1</td></tr>
                              <tr><td className="px-2 py-1">Physics</td><td className="px-2 py-1">Prof. A</td><td className="px-2 py-1">R1</td></tr>
                            </tbody>
                          </table>
                          <span className="text-slate-700 text-sm">Here, Teacher → Room, but Teacher is not a candidate key.</span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-2">
                          <div className="flex-1">
                            <span className="font-semibold text-blue-700">SubjectTeacher(Subject, Teacher)</span>
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-blue-700">TeacherRoom(Teacher, Room)</span>
                          </div>
                        </div>
                        <div className="font-semibold text-blue-700 mb-1">✅ 4NF – Fourth Normal Form</div>
                        <p className="mb-2">Goal: Remove multi-valued dependencies (MVDs)<br/>Rule: Must be in BCNF and no multi-valued dependency.</p>
                        <div className="bg-blue-50 rounded-lg p-3 mb-2">
                          <span className="font-semibold text-blue-700">🔁 What is a Multivalued Dependency?</span><br/>
                          <span className="text-slate-700">A →→ B and A →→ C but B and C are independent</span>
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold text-blue-700">Example:</span>
                          <table className="min-w-[220px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
                            <thead>
                              <tr className="bg-blue-50 text-blue-700">
                                <th className="px-2 py-1 border-b">Student</th>
                                <th className="px-2 py-1 border-b">Hobby</th>
                                <th className="px-2 py-1 border-b">Language</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Painting</td><td className="px-2 py-1">English</td></tr>
                              <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Singing</td><td className="px-2 py-1">English</td></tr>
                              <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Painting</td><td className="px-2 py-1">French</td></tr>
                              <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Singing</td><td className="px-2 py-1">French</td></tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-2">
                          <div className="flex-1">
                            <span className="font-semibold text-blue-700">StudentHobby Table:</span>
                            <table className="min-w-[120px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
                              <thead>
                                <tr className="bg-blue-50 text-blue-700">
                                  <th className="px-2 py-1 border-b">Student</th>
                                  <th className="px-2 py-1 border-b">Hobby</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Painting</td></tr>
                                <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Singing</td></tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-blue-700">StudentLanguage Table:</span>
                            <table className="min-w-[120px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
                              <thead>
                                <tr className="bg-blue-50 text-blue-700">
                                  <th className="px-2 py-1 border-b">Student</th>
                                  <th className="px-2 py-1 border-b">Language</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">English</td></tr>
                                <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">French</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="font-semibold text-blue-700 mb-1">✅ 5NF – Fifth Normal Form</div>
                        <p className="mb-2">Goal: Remove join dependency anomalies<br/>Rule: A relation should not lose data after decomposing into smaller tables and joining again.</p>
                        <div className="bg-blue-50 rounded-lg p-3 mb-2">
                          <span className="font-semibold text-blue-700">🔁 What is a Join Dependency?</span><br/>
                          <span className="text-slate-700">A join dependency occurs when a table can be reconstructed from 3+ tables, but there's no dependency between them directly.</span>
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold text-blue-700">Example:</span>
                          <table className="min-w-[220px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
                            <thead>
                              <tr className="bg-blue-50 text-blue-700">
                                <th className="px-2 py-1 border-b">Project</th>
                                <th className="px-2 py-1 border-b">Supplier</th>
                                <th className="px-2 py-1 border-b">Part</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">P1</td><td className="px-2 py-1">S1</td><td className="px-2 py-1">PartA</td></tr>
                              <tr><td className="px-2 py-1">P1</td><td className="px-2 py-1">S1</td><td className="px-2 py-1">PartB</td></tr>
                              <tr><td className="px-2 py-1">P1</td><td className="px-2 py-1">S2</td><td className="px-2 py-1">PartA</td></tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-2">
                          <div className="flex-1">
                            <span className="font-semibold text-blue-700">ProjectSupplier(Project, Supplier)</span>
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-blue-700">ProjectPart(Project, Part)</span>
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-blue-700">SupplierPart(Supplier, Part)</span>
                          </div>
                        </div>
                        <div className="font-semibold text-blue-700 mb-1">✅ 6NF – Sixth Normal Form</div>
                        <p className="mb-2">Goal: Achieve irreducible fact representation<br/>Used In: Temporal databases, streaming systems<br/>Each table represents a single fact with a timestamp</p>
                        <p className="text-slate-700 text-sm mb-2">📌 Rarely used in standard relational databases.</p>
                      </div>

                      {/* Summary Table */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">✅</span>
                          <span className="font-semibold text-lg text-indigo-700">Summary Table</span>
                        </div>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-2 py-1 border-b">Normal Form</th>
                                <th className="px-2 py-1 border-b">Eliminates</th>
                                <th className="px-2 py-1 border-b">Example Problem</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">1NF</td><td className="px-2 py-1">Repeating/multivalued fields</td><td className="px-2 py-1">Pen, Pencil in one column</td></tr>
                              <tr><td className="px-2 py-1">2NF</td><td className="px-2 py-1">Partial dependencies</td><td className="px-2 py-1">CustomerName depends on OrderID</td></tr>
                              <tr><td className="px-2 py-1">3NF</td><td className="px-2 py-1">Transitive dependencies</td><td className="px-2 py-1">DeptName depends on DeptID</td></tr>
                              <tr><td className="px-2 py-1">BCNF</td><td className="px-2 py-1">Non-key determinants</td><td className="px-2 py-1">Teacher → Room</td></tr>
                              <tr><td className="px-2 py-1">4NF</td><td className="px-2 py-1">Multivalued dependencies</td><td className="px-2 py-1">Student has many hobbies & languages</td></tr>
                              <tr><td className="px-2 py-1">5NF</td><td className="px-2 py-1">Join dependencies</td><td className="px-2 py-1">Supplier-Part-Project issue</td></tr>
                              <tr><td className="px-2 py-1">6NF</td><td className="px-2 py-1">Temporal data anomalies</td><td className="px-2 py-1">Timestamped fact tables</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Interview Tips */}
                      <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-cyan-100 rounded-xl p-4 shadow-inner border-l-4 border-blue-300">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-600 text-xl">🎯</span>
                          <span className="font-semibold text-lg text-blue-700">Interview Tips</span>
                        </div>
                        <ul className="list-disc pl-6 text-slate-700 text-sm">
                          <li>✅ Normalize to at least 3NF in OLTP systems</li>
                          <li>✅ Be prepared to identify dependencies from a table</li>
                          <li>✅ Know the differences between normalization and denormalization</li>
                          <li>✅ Practice decomposing and rejoining multi-valued or join-dependent tables</li>
                        </ul>
                      </div>
                    </div>
                  ) : topic === 'SQL Operations and Queries' ? (
                    <div className="space-y-8">
                      {/* Section Title */}
                      <div className="flex items-center gap-4 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-white shadow-lg">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">SQL Operations and Queries</h2>
                      </div>

                      {/* What is SQL? */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-green-600 text-xl">✅</span>
                          <span className="font-semibold text-lg text-blue-700">What is SQL?</span>
                        </div>
                        <p className="mb-2">SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. It allows users to perform CRUD operations (Create, Read, Update, Delete), manage schema, control access, and define views and relationships.</p>
                      </div>

                      {/* Core SQL Categories */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🛠️</span>
                          <span className="font-semibold text-lg text-indigo-700">Core SQL Categories</span>
                        </div>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-2 py-1 border-b">Type</th>
                                <th className="px-2 py-1 border-b">Description</th>
                                <th className="px-2 py-1 border-b">Examples</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">DDL (Data Definition)</td><td className="px-2 py-1">Defines structure</td><td className="px-2 py-1">CREATE, ALTER, DROP</td></tr>
                              <tr><td className="px-2 py-1">DML (Data Manipulation)</td><td className="px-2 py-1">Manages data</td><td className="px-2 py-1">SELECT, INSERT, UPDATE, DELETE</td></tr>
                              <tr><td className="px-2 py-1">DCL (Data Control)</td><td className="px-2 py-1">Controls permissions</td><td className="px-2 py-1">GRANT, REVOKE</td></tr>
                              <tr><td className="px-2 py-1">TCL (Transaction Control)</td><td className="px-2 py-1">Manages transactions</td><td className="px-2 py-1">COMMIT, ROLLBACK, SAVEPOINT</td></tr>
                              <tr><td className="px-2 py-1">DQL (Data Query)</td><td className="px-2 py-1">Retrieves data</td><td className="px-2 py-1">SELECT</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* SELECT Statement */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🔍</span>
                          <span className="font-semibold text-lg text-blue-700">SELECT Statement</span>
                        </div>
                        <p className="mb-2">Used to retrieve data from one or more tables.</p>
                        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`SELECT name, salary FROM Employees WHERE department = 'HR';`}</pre>
                        <ul className="list-disc pl-6 text-slate-700 text-sm mt-2">
                          <li>Can include filtering (<b>WHERE</b>), sorting (<b>ORDER BY</b>), grouping (<b>GROUP BY</b>), aggregation, joins, subqueries, and set operations.</li>
                          <li>Use <b>DISTINCT</b> to eliminate duplicates.</li>
                        </ul>
                      </div>

                      {/* Views and Materialized Views */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">📚</span>
                          <span className="font-semibold text-lg text-indigo-700">Views and Materialized Views</span>
                        </div>
                        <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
                          <li><b>View:</b> A virtual table based on the result of a SQL query. It does not store data itself.</li>
                        </ul>
                        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`CREATE VIEW HR_Employees AS 
SELECT name, salary FROM Employees WHERE department = 'HR';`}</pre>
                        <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
                          <li><b>Materialized View:</b> Stores the result physically and needs manual or scheduled refresh.</li>
                        </ul>
                        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`CREATE MATERIALIZED VIEW Emp_Summary AS
SELECT department, COUNT(*) FROM Employees GROUP BY department;`}</pre>
                        <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
                          <li><b>WITH CHECK OPTION:</b> Ensures updates to a view do not violate its WHERE clause.</li>
                        </ul>
                        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`CREATE VIEW IT_Employees AS 
SELECT * FROM Employees WHERE Department = 'IT' 
WITH CHECK OPTION;`}</pre>
                      </div>

                      {/* Subqueries */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">📂</span>
                          <span className="font-semibold text-lg text-blue-700">Subqueries</span>
                        </div>
                        <p className="mb-2">A query within another query. Types:</p>
                        <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
                          <li><b>Scalar:</b> Returns a single value.</li>
                          <li><b>Correlated:</b> Depends on outer query row.</li>
                          <li><b>Nested:</b> Appears in WHERE, FROM, or SELECT.</li>
                        </ul>
                        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`SELECT name FROM Employees 
WHERE salary > (SELECT AVG(salary) FROM Employees);`}</pre>
                      </div>

                      {/* Aggregate Functions */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🧮</span>
                          <span className="font-semibold text-lg text-indigo-700">Aggregate Functions</span>
                        </div>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-2 py-1 border-b">Function</th>
                                <th className="px-2 py-1 border-b">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">COUNT()</td><td className="px-2 py-1">Number of records</td></tr>
                              <tr><td className="px-2 py-1">SUM()</td><td className="px-2 py-1">Total sum</td></tr>
                              <tr><td className="px-2 py-1">AVG()</td><td className="px-2 py-1">Average</td></tr>
                              <tr><td className="px-2 py-1">MIN()</td><td className="px-2 py-1">Smallest value</td></tr>
                              <tr><td className="px-2 py-1">MAX()</td><td className="px-2 py-1">Largest value</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* GROUP BY Clause */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🔢</span>
                          <span className="font-semibold text-lg text-blue-700">GROUP BY Clause</span>
                        </div>
                        <p className="mb-2">Groups rows that have the same values into summary rows:</p>
                        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`SELECT department, COUNT(*) 
FROM Employees 
GROUP BY department;`}</pre>
                        <p className="text-slate-700 text-sm mt-2">Often used with <b>HAVING</b> to filter group-level data.</p>
                      </div>

                      {/* Joins in SQL */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🔗</span>
                          <span className="font-semibold text-lg text-indigo-700">Joins in SQL</span>
                        </div>
                        <p className="mb-2">Used to retrieve data from multiple tables based on logical relationships.</p>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-2 py-1 border-b">Join Type</th>
                                <th className="px-2 py-1 border-b">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">INNER JOIN</td><td className="px-2 py-1">Returns records with matching values in both tables.</td></tr>
                              <tr><td className="px-2 py-1">LEFT JOIN</td><td className="px-2 py-1">All records from the left table + matches from right.</td></tr>
                              <tr><td className="px-2 py-1">RIGHT JOIN</td><td className="px-2 py-1">All records from the right table + matches from left.</td></tr>
                              <tr><td className="px-2 py-1">FULL JOIN</td><td className="px-2 py-1">All records with matches from both sides.</td></tr>
                              <tr><td className="px-2 py-1">SELF JOIN</td><td className="px-2 py-1">Join a table with itself.</td></tr>
                              <tr><td className="px-2 py-1">CROSS JOIN</td><td className="px-2 py-1">Cartesian product of two tables.</td></tr>
                            </tbody>
                          </table>
                        </div>
                        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`SELECT A.name, B.department_name 
FROM Employee A 
INNER JOIN Department B ON A.dept_id = B.id;`}</pre>
                      </div>

                      {/* Set Operations */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🔁</span>
                          <span className="font-semibold text-lg text-blue-700">Set Operations</span>
                        </div>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-blue-50 text-blue-700">
                                <th className="px-2 py-1 border-b">Operation</th>
                                <th className="px-2 py-1 border-b">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">UNION</td><td className="px-2 py-1">Removes duplicates</td></tr>
                              <tr><td className="px-2 py-1">UNION ALL</td><td className="px-2 py-1">Includes duplicates</td></tr>
                              <tr><td className="px-2 py-1">INTERSECT</td><td className="px-2 py-1">Common rows</td></tr>
                              <tr><td className="px-2 py-1">EXCEPT</td><td className="px-2 py-1">Rows in first query not in second</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* DELETE vs TRUNCATE */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🧹</span>
                          <span className="font-semibold text-lg text-indigo-700">DELETE vs TRUNCATE</span>
                        </div>
                        <div className="overflow-x-auto mb-2">
                          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-2 py-1 border-b">Feature</th>
                                <th className="px-2 py-1 border-b">DELETE</th>
                                <th className="px-2 py-1 border-b">TRUNCATE</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="px-2 py-1">Rollback</td><td className="px-2 py-1">Yes</td><td className="px-2 py-1">No (in most DBs)</td></tr>
                              <tr><td className="px-2 py-1">Where Clause</td><td className="px-2 py-1">Can filter rows</td><td className="px-2 py-1">Removes all rows</td></tr>
                              <tr><td className="px-2 py-1">Speed</td><td className="px-2 py-1">Slower (logs each row)</td><td className="px-2 py-1">Faster (deallocates pages)</td></tr>
                              <tr><td className="px-2 py-1">Triggers</td><td className="px-2 py-1">Invokes triggers</td><td className="px-2 py-1">May not invoke triggers</td></tr>
                            </tbody>
                          </table>
                        </div>
                        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`DELETE FROM Employees WHERE department = 'Sales';
TRUNCATE TABLE Employees;`}</pre>
                      </div>

                      {/* Additional Interview-Relevant Concepts */}
                      <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-500 text-xl">🧩</span>
                          <span className="font-semibold text-lg text-blue-700">Additional Interview-Relevant Concepts</span>
                        </div>
                        <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
                          <li><b>Indexes:</b> Improves query performance.</li>
                        </ul>
                        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`CREATE INDEX idx_salary ON Employees(salary);`}</pre>
                        <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
                          <li><b>Normalization:</b> Reduces redundancy. Common forms: 1NF, 2NF, 3NF, BCNF.</li>
                          <li><b>Window Functions:</b> Perform calculations across a set of rows related to the current row.</li>
                        </ul>
                        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS rank
FROM Employees;`}</pre>
                        <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
                          <li><b>Common Table Expressions (CTEs):</b> Reusable temporary result sets.</li>
                        </ul>
                        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`WITH HighSalaries AS (
  SELECT * FROM Employees WHERE salary > 100000
)
SELECT * FROM HighSalaries WHERE department = 'IT';`}</pre>
                      </div>

                      {/* Summary */}
                      <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-cyan-100 rounded-xl p-4 shadow-inner border-l-4 border-blue-300">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-600 text-xl">📌</span>
                          <span className="font-semibold text-lg text-blue-700">Summary</span>
                        </div>
                        <ul className="list-disc pl-6 text-slate-700 text-sm">
                          <li>SQL is not just about querying data — it's about understanding how to interact with and manipulate structured information in relational databases.</li>
                          <li>Strong SQL skills demonstrate both data handling and problem-solving capabilities.</li>
                        </ul>
                      </div>
                    </div>
                  ) : topic === 'Data Normalization and Design Quality' ? (
  <div className="space-y-8">
    {/* Section Title */}
    <div className="flex items-center gap-4 mb-2">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-white shadow-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">Data Normalization and Design Quality</h2>
    </div>

    {/* What is Normalization? */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🧩</span>
        <span className="font-semibold text-lg text-blue-700">What is Normalization?</span>
      </div>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Eliminate redundant data</li>
        <li>Avoid update, insert, and delete anomalies</li>
        <li>Ensure data consistency</li>
      </ul>
      <p className="mb-2">It structures a database into multiple related tables to store data logically.</p>
    </div>

    {/* Why is Normalization Important? */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">❓</span>
        <span className="font-semibold text-lg text-indigo-700">Why is Normalization Important in DBMS?</span>
      </div>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Reduces Redundancy</li>
        <li>Improves Data Integrity</li>
        <li>Avoids Anomalies (Insert, Update, Delete)</li>
        <li>Makes Schema Maintainable</li>
      </ul>
    </div>

    {/* Denormalization */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🔁</span>
        <span className="font-semibold text-lg text-blue-700">What is Denormalization?</span>
      </div>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Combining normalized tables to improve read performance and reduce joins</li>
        <li>Used in analytics and reporting systems (OLAP)</li>
      </ul>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Normalization</th>
              <th className="px-2 py-1 border-b">Denormalization</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Removes redundancy</td><td className="px-2 py-1">Introduces controlled redundancy</td></tr>
            <tr><td className="px-2 py-1">More write efficient</td><td className="px-2 py-1">More read efficient</td></tr>
            <tr><td className="px-2 py-1">Complex joins in queries</td><td className="px-2 py-1">Fewer joins</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Data Redundancy */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🚨</span>
        <span className="font-semibold text-lg text-indigo-700">What is Data Redundancy?</span>
      </div>
      <p className="mb-2">Data redundancy occurs when the same piece of data exists in multiple places in a database.</p>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">EmpID</th>
              <th className="px-2 py-1 border-b">EmpName</th>
              <th className="px-2 py-1 border-b">DeptName</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">HR</td></tr>
            <tr><td className="px-2 py-1">2</td><td className="px-2 py-1">Bob</td><td className="px-2 py-1">HR</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-slate-700 text-sm mb-2">Redundancy: HR is repeated.</p>
      <p className="text-green-700 text-sm font-semibold">✅ Solution: Normalize using separate Department table.</p>
    </div>

    {/* Normal Forms in Detail */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🔧</span>
        <span className="font-semibold text-lg text-blue-700">Normal Forms in Detail (with Examples)</span>
      </div>
      <p className="mb-2">Let's normalize the following unstructured table (UNF) step by step:</p>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">OrderID</th>
              <th className="px-2 py-1 border-b">CustomerName</th>
              <th className="px-2 py-1 border-b">Product</th>
              <th className="px-2 py-1 border-b">Quantity</th>
              <th className="px-2 py-1 border-b">DeliveryDate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Pen, Pencil</td><td className="px-2 py-1">2, 3</td><td className="px-2 py-1">2024-01-01</td></tr>
            <tr><td className="px-2 py-1">2</td><td className="px-2 py-1">Bob</td><td className="px-2 py-1">Notebook</td><td className="px-2 py-1">5</td><td className="px-2 py-1">2024-01-02</td></tr>
          </tbody>
        </table>
      </div>
      <div className="font-semibold text-blue-700 mb-1">✅ 1NF – First Normal Form</div>
      <p className="mb-2">Goal: Eliminate multivalued attributes.<br/>Rule: Each column must contain atomic (indivisible) values.</p>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">OrderID</th>
              <th className="px-2 py-1 border-b">CustomerName</th>
              <th className="px-2 py-1 border-b">Product</th>
              <th className="px-2 py-1 border-b">Quantity</th>
              <th className="px-2 py-1 border-b">DeliveryDate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Pen</td><td className="px-2 py-1">2</td><td className="px-2 py-1">2024-01-01</td></tr>
            <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Pencil</td><td className="px-2 py-1">3</td><td className="px-2 py-1">2024-01-01</td></tr>
            <tr><td className="px-2 py-1">2</td><td className="px-2 py-1">Bob</td><td className="px-2 py-1">Notebook</td><td className="px-2 py-1">5</td><td className="px-2 py-1">2024-01-02</td></tr>
          </tbody>
        </table>
      </div>
      <div className="font-semibold text-blue-700 mb-1">✅ 2NF – Second Normal Form</div>
      <p className="mb-2">Goal: Remove partial dependencies.<br/>Rule: Must be in 1NF and every non-prime attribute should be fully functionally dependent on the whole primary key.</p>
      <div className="bg-blue-50 rounded-lg p-3 mb-2">
        <span className="font-semibold text-blue-700">🧠 Primary Key = (OrderID, Product)</span><br/>
        <span className="text-slate-700">Problem: CustomerName and DeliveryDate depend only on OrderID.</span>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-2">
        <div className="flex-1">
          <span className="font-semibold text-blue-700">Order Table:</span>
          <table className="min-w-[220px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
            <thead>
              <tr className="bg-blue-50 text-blue-700">
                <th className="px-2 py-1 border-b">OrderID</th>
                <th className="px-2 py-1 border-b">CustomerName</th>
                <th className="px-2 py-1 border-b">DeliveryDate</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">2024-01-01</td></tr>
              <tr><td className="px-2 py-1">2</td><td className="px-2 py-1">Bob</td><td className="px-2 py-1">2024-01-02</td></tr>
            </tbody>
          </table>
        </div>
        <div className="flex-1">
          <span className="font-semibold text-blue-700">OrderDetails Table:</span>
          <table className="min-w-[220px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
            <thead>
              <tr className="bg-blue-50 text-blue-700">
                <th className="px-2 py-1 border-b">OrderID</th>
                <th className="px-2 py-1 border-b">Product</th>
                <th className="px-2 py-1 border-b">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Pen</td><td className="px-2 py-1">2</td></tr>
              <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Pencil</td><td className="px-2 py-1">3</td></tr>
              <tr><td className="px-2 py-1">2</td><td className="px-2 py-1">Notebook</td><td className="px-2 py-1">5</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="font-semibold text-blue-700 mb-1">✅ 3NF – Third Normal Form</div>
      <p className="mb-2">Goal: Remove transitive dependencies.<br/>Rule: Must be in 2NF, and no non-prime attribute should depend on another non-prime attribute.</p>
      <div className="bg-blue-50 rounded-lg p-3 mb-2">
        <span className="font-semibold text-blue-700">🔁 What is a Transitive Dependency?</span><br/>
        <span className="text-slate-700">A → B and B → C implies A → C</span>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">Problem Example:</span>
        <table className="min-w-[220px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">EmpID</th>
              <th className="px-2 py-1 border-b">EmpName</th>
              <th className="px-2 py-1 border-b">DeptID</th>
              <th className="px-2 py-1 border-b">DeptName</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">D1</td><td className="px-2 py-1">HR</td></tr>
          </tbody>
        </table>
        <span className="text-slate-700 text-sm">EmpID → DeptID (direct)<br/>DeptID → DeptName (indirect)<br/>So: EmpID → DeptName (transitive)</span>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-2">
        <div className="flex-1">
          <span className="font-semibold text-blue-700">Employees Table:</span>
          <table className="min-w-[180px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
            <thead>
              <tr className="bg-blue-50 text-blue-700">
                <th className="px-2 py-1 border-b">EmpID</th>
                <th className="px-2 py-1 border-b">EmpName</th>
                <th className="px-2 py-1 border-b">DeptID</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-2 py-1">1</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">D1</td></tr>
            </tbody>
          </table>
        </div>
        <div className="flex-1">
          <span className="font-semibold text-blue-700">Departments Table:</span>
          <table className="min-w-[140px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
            <thead>
              <tr className="bg-blue-50 text-blue-700">
                <th className="px-2 py-1 border-b">DeptID</th>
                <th className="px-2 py-1 border-b">DeptName</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-2 py-1">D1</td><td className="px-2 py-1">HR</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="font-semibold text-blue-700 mb-1">✅ BCNF – Boyce-Codd Normal Form</div>
      <p className="mb-2">Goal: Remove non-key dependencies.<br/>Rule: Every determinant must be a candidate key.</p>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">Problem Example:</span>
        <table className="min-w-[220px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Subject</th>
              <th className="px-2 py-1 border-b">Teacher</th>
              <th className="px-2 py-1 border-b">Room</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Math</td><td className="px-2 py-1">Prof. A</td><td className="px-2 py-1">R1</td></tr>
            <tr><td className="px-2 py-1">Physics</td><td className="px-2 py-1">Prof. A</td><td className="px-2 py-1">R1</td></tr>
          </tbody>
        </table>
        <span className="text-slate-700 text-sm">Here, Teacher → Room, but Teacher is not a candidate key.</span>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-2">
        <div className="flex-1">
          <span className="font-semibold text-blue-700">SubjectTeacher(Subject, Teacher)</span>
        </div>
        <div className="flex-1">
          <span className="font-semibold text-blue-700">TeacherRoom(Teacher, Room)</span>
        </div>
      </div>
      <div className="font-semibold text-blue-700 mb-1">✅ 4NF – Fourth Normal Form</div>
      <p className="mb-2">Goal: Remove multi-valued dependencies (MVDs)<br/>Rule: Must be in BCNF and no multi-valued dependency.</p>
      <div className="bg-blue-50 rounded-lg p-3 mb-2">
        <span className="font-semibold text-blue-700">🔁 What is a Multivalued Dependency?</span><br/>
        <span className="text-slate-700">A →→ B and A →→ C but B and C are independent</span>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">Example:</span>
        <table className="min-w-[220px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Student</th>
              <th className="px-2 py-1 border-b">Hobby</th>
              <th className="px-2 py-1 border-b">Language</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Painting</td><td className="px-2 py-1">English</td></tr>
            <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Singing</td><td className="px-2 py-1">English</td></tr>
            <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Painting</td><td className="px-2 py-1">French</td></tr>
            <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Singing</td><td className="px-2 py-1">French</td></tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-2">
        <div className="flex-1">
          <span className="font-semibold text-blue-700">StudentHobby Table:</span>
          <table className="min-w-[120px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
            <thead>
              <tr className="bg-blue-50 text-blue-700">
                <th className="px-2 py-1 border-b">Student</th>
                <th className="px-2 py-1 border-b">Hobby</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Painting</td></tr>
              <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">Singing</td></tr>
            </tbody>
          </table>
        </div>
        <div className="flex-1">
          <span className="font-semibold text-blue-700">StudentLanguage Table:</span>
          <table className="min-w-[120px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
            <thead>
              <tr className="bg-blue-50 text-blue-700">
                <th className="px-2 py-1 border-b">Student</th>
                <th className="px-2 py-1 border-b">Language</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">English</td></tr>
              <tr><td className="px-2 py-1">Alice</td><td className="px-2 py-1">French</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="font-semibold text-blue-700 mb-1">✅ 5NF – Fifth Normal Form</div>
      <p className="mb-2">Goal: Remove join dependency anomalies<br/>Rule: A relation should not lose data after decomposing into smaller tables and joining again.</p>
      <div className="bg-blue-50 rounded-lg p-3 mb-2">
        <span className="font-semibold text-blue-700">🔁 What is a Join Dependency?</span><br/>
        <span className="text-slate-700">A join dependency occurs when a table can be reconstructed from 3+ tables, but there's no dependency between them directly.</span>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">Example:</span>
        <table className="min-w-[220px] w-full text-sm border border-slate-200 rounded-lg mt-1 mb-2">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Project</th>
              <th className="px-2 py-1 border-b">Supplier</th>
              <th className="px-2 py-1 border-b">Part</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">P1</td><td className="px-2 py-1">S1</td><td className="px-2 py-1">PartA</td></tr>
            <tr><td className="px-2 py-1">P1</td><td className="px-2 py-1">S1</td><td className="px-2 py-1">PartB</td></tr>
            <tr><td className="px-2 py-1">P1</td><td className="px-2 py-1">S2</td><td className="px-2 py-1">PartA</td></tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-2">
        <div className="flex-1">
          <span className="font-semibold text-blue-700">ProjectSupplier(Project, Supplier)</span>
        </div>
        <div className="flex-1">
          <span className="font-semibold text-blue-700">ProjectPart(Project, Part)</span>
        </div>
        <div className="flex-1">
          <span className="font-semibold text-blue-700">SupplierPart(Supplier, Part)</span>
        </div>
      </div>
      <div className="font-semibold text-blue-700 mb-1">✅ 6NF – Sixth Normal Form</div>
      <p className="mb-2">Goal: Achieve irreducible fact representation<br/>Used In: Temporal databases, streaming systems<br/>Each table represents a single fact with a timestamp</p>
      <p className="text-slate-700 text-sm mb-2">📌 Rarely used in standard relational databases.</p>
    </div>

    {/* Summary Table */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">✅</span>
        <span className="font-semibold text-lg text-indigo-700">Summary Table</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Normal Form</th>
              <th className="px-2 py-1 border-b">Eliminates</th>
              <th className="px-2 py-1 border-b">Example Problem</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">1NF</td><td className="px-2 py-1">Repeating/multivalued fields</td><td className="px-2 py-1">Pen, Pencil in one column</td></tr>
            <tr><td className="px-2 py-1">2NF</td><td className="px-2 py-1">Partial dependencies</td><td className="px-2 py-1">CustomerName depends on OrderID</td></tr>
            <tr><td className="px-2 py-1">3NF</td><td className="px-2 py-1">Transitive dependencies</td><td className="px-2 py-1">DeptName depends on DeptID</td></tr>
            <tr><td className="px-2 py-1">BCNF</td><td className="px-2 py-1">Non-key determinants</td><td className="px-2 py-1">Teacher → Room</td></tr>
            <tr><td className="px-2 py-1">4NF</td><td className="px-2 py-1">Multivalued dependencies</td><td className="px-2 py-1">Student has many hobbies & languages</td></tr>
            <tr><td className="px-2 py-1">5NF</td><td className="px-2 py-1">Join dependencies</td><td className="px-2 py-1">Supplier-Part-Project issue</td></tr>
            <tr><td className="px-2 py-1">6NF</td><td className="px-2 py-1">Temporal data anomalies</td><td className="px-2 py-1">Timestamped fact tables</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Interview Tips */}
    <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-cyan-100 rounded-xl p-4 shadow-inner border-l-4 border-blue-300">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">🎯</span>
        <span className="font-semibold text-lg text-blue-700">Interview Tips</span>
      </div>
      <ul className="list-disc pl-6 text-slate-700 text-sm">
        <li>✅ Normalize to at least 3NF in OLTP systems</li>
        <li>✅ Be prepared to identify dependencies from a table</li>
        <li>✅ Know the differences between normalization and denormalization</li>
        <li>✅ Practice decomposing and rejoining multi-valued or join-dependent tables</li>
      </ul>
    </div>
  </div>
) 
              
                  
                  : topic === 'Transactions, Concurrency & Recovery' ? (
  <div className="space-y-8">
    {/* Section Title */}
    <div className="flex items-center gap-4 mb-2">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-white shadow-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8" /></svg>
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">Transactions, Concurrency & Recovery</h2>
    </div>

    {/* What is a Transaction? */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🔄</span>
        <span className="font-semibold text-lg text-blue-700">What is a Transaction?</span>
      </div>
      <p className="mb-2">A transaction is a single logical unit of work that may contain multiple database operations like INSERT, UPDATE, DELETE, or SELECT.</p>
      <p className="text-blue-700 text-sm mb-2">🧠 It must be atomic – either all operations succeed or none of them do.</p>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">📌 Example: Bank Transfer</span>
        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`-- Transfer ₹500 from A to B
BEGIN;
UPDATE accounts SET balance = balance - 500 WHERE acc_id = 'A';
UPDATE accounts SET balance = balance + 500 WHERE acc_id = 'B';
COMMIT;`}</pre>
        <p className="text-slate-700 text-sm mt-2">If system crashes midway, balance inconsistencies occur unless handled properly using ACID properties.</p>
      </div>
    </div>

    {/* ACID Properties */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-indigo-700">ACID Properties</span>
      </div>
      <p className="mb-2">ACID ensures data integrity even in failures or concurrent access.</p>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Property</th>
              <th className="px-2 py-1 border-b">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">A – Atomicity</td><td className="px-2 py-1">All or nothing execution. Use ROLLBACK to undo.</td></tr>
            <tr><td className="px-2 py-1">C – Consistency</td><td className="px-2 py-1">Data remains in valid state before and after.</td></tr>
            <tr><td className="px-2 py-1">I – Isolation</td><td className="px-2 py-1">Transactions don't interfere with each other.</td></tr>
            <tr><td className="px-2 py-1">D – Durability</td><td className="px-2 py-1">Committed changes are permanent (even after crash).</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* COMMIT and ROLLBACK */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">✍️</span>
        <span className="font-semibold text-lg text-blue-700">COMMIT and ROLLBACK</span>
      </div>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li><b>COMMIT:</b> Makes the transaction permanent</li>
        <li><b>ROLLBACK:</b> Undo changes if an error occurs or abort is issued</li>
      </ul>
      <p className="text-blue-700 text-sm">🧠 Interview Tip: Always mention how these ensure Atomicity and Durability.</p>
    </div>

    {/* Concurrency Control in DBMS */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🔐</span>
        <span className="font-semibold text-lg text-indigo-700">Concurrency Control in DBMS</span>
      </div>
      <p className="mb-2">Concurrency control ensures correct execution of multiple transactions simultaneously without conflict.</p>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Problem</th>
              <th className="px-2 py-1 border-b">Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Dirty Read</td><td className="px-2 py-1">Reading uncommitted changes from another transaction</td></tr>
            <tr><td className="px-2 py-1">Lost Update</td><td className="px-2 py-1">Two transactions update same data, but one overwrite is lost</td></tr>
            <tr><td className="px-2 py-1">Non-Repeatable Read</td><td className="px-2 py-1">Re-reading same data gives different results in same transaction</td></tr>
            <tr><td className="px-2 py-1">Phantom Read</td><td className="px-2 py-1">Query returns different set of rows on re-execution</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Lock-Based Protocols */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🔒</span>
        <span className="font-semibold text-lg text-blue-700">Lock-Based Protocols</span>
      </div>
      <p className="mb-2">A lock is a mechanism to restrict access to a data item during transaction execution.</p>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Type</th>
              <th className="px-2 py-1 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Shared Lock (S)</td><td className="px-2 py-1">For read operations. Allows multiple transactions.</td></tr>
            <tr><td className="px-2 py-1">Exclusive Lock (X)</td><td className="px-2 py-1">For write operations. Only one transaction allowed.</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Types of Locks in DBMS */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🧰</span>
        <span className="font-semibold text-lg text-indigo-700">Types of Locks in DBMS</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Lock Type</th>
              <th className="px-2 py-1 border-b">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Binary Lock</td><td className="px-2 py-1">Locked / Unlocked state</td></tr>
            <tr><td className="px-2 py-1">Shared/Exclusive</td><td className="px-2 py-1">S: Read-only; X: Read+Write</td></tr>
            <tr><td className="px-2 py-1">Intention Lock</td><td className="px-2 py-1">Indicates intention to acquire S or X on lower levels (used in hierarchy)</td></tr>
            <tr><td className="px-2 py-1">Read-Write Lock</td><td className="px-2 py-1">A variant of S/X used in high-concurrency systems</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Deadlock in DBMS */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🌀</span>
        <span className="font-semibold text-lg text-blue-700">Deadlock in DBMS</span>
      </div>
      <p className="mb-2">Deadlock occurs when two or more transactions are waiting indefinitely for each other's resources.</p>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">📌 Example:</span>
        <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
          <li>T1 locks A, requests B</li>
          <li>T2 locks B, requests A</li>
          <li>→ Circular wait</li>
        </ul>
      </div>
    </div>

    {/* Deadlock Prevention Techniques */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🧹</span>
        <span className="font-semibold text-lg text-indigo-700">Deadlock Prevention Techniques</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Strategy</th>
              <th className="px-2 py-1 border-b">Method</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Wait-Die</td><td className="px-2 py-1">Older transactions wait; younger abort</td></tr>
            <tr><td className="px-2 py-1">Wound-Wait</td><td className="px-2 py-1">Older wounds (forces rollback) of younger</td></tr>
            <tr><td className="px-2 py-1">Timeout-Based</td><td className="px-2 py-1">Abort if lock not granted in time</td></tr>
            <tr><td className="px-2 py-1">No Wait</td><td className="px-2 py-1">Immediately abort conflicting transactions</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Concurrency Control Techniques */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🧱</span>
        <span className="font-semibold text-lg text-blue-700">Concurrency Control Techniques</span>
      </div>
      <div className="space-y-4">
        {/* Two-Phase Locking (2PL) */}
        <div>
          <span className="font-semibold text-blue-700">✅ 1. Two-Phase Locking (2PL)</span>
          <p className="text-slate-700 text-sm mb-1">Ensures serializability using two phases:</p>
          <ul className="list-disc pl-6 text-slate-700 text-sm mb-1">
            <li>Growing Phase: Acquire locks only</li>
            <li>Shrinking Phase: Release locks only</li>
          </ul>
          <p className="text-slate-700 text-sm mb-1">📌 Once a lock is released, no new locks can be acquired.</p>
        </div>
        {/* Timestamp Ordering */}
        <div>
          <span className="font-semibold text-blue-700">✅ 2. Timestamp Ordering</span>
          <p className="text-slate-700 text-sm mb-1">Each transaction has a unique timestamp:</p>
          <ul className="list-disc pl-6 text-slate-700 text-sm mb-1">
            <li>Older transactions get priority</li>
            <li>Avoids deadlocks</li>
          </ul>
        </div>
        {/* MVCC */}
        <div>
          <span className="font-semibold text-blue-700">✅ 3. Multiversion Concurrency Control (MVCC)</span>
          <p className="text-slate-700 text-sm mb-1">Multiple versions of data are kept.</p>
          <ul className="list-disc pl-6 text-slate-700 text-sm mb-1">
            <li>Readers get a snapshot; writers update new versions.</li>
            <li>Used in PostgreSQL, Oracle.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Transaction Log */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">📋</span>
        <span className="font-semibold text-lg text-indigo-700">Transaction Log</span>
      </div>
      <p className="mb-2">A transaction log records all actions performed by transactions.</p>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Transaction ID</li>
        <li>Operation (e.g., UPDATE)</li>
        <li>Old and new values</li>
        <li>Timestamp</li>
      </ul>
      <p className="text-blue-700 text-sm font-semibold">✅ Purpose: Recovery in case of failure, Rollback/Redo of transactions</p>
    </div>

    {/* Failure & Recovery Mechanisms */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🔄</span>
        <span className="font-semibold text-lg text-blue-700">Failure & Recovery Mechanisms</span>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">✳️ Types of Failures:</span>
        <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
          <li>Transaction failure</li>
          <li>System crash</li>
          <li>Media failure</li>
        </ul>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Technique</th>
              <th className="px-2 py-1 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Undo Logging</td><td className="px-2 py-1">Write changes to log before actual data → helps in rollback</td></tr>
            <tr><td className="px-2 py-1">Redo Logging</td><td className="px-2 py-1">Log committed transactions → redo in case of crash</td></tr>
            <tr><td className="px-2 py-1">Undo-Redo Logging</td><td className="px-2 py-1">Handles both committed and uncommitted transactions</td></tr>
            <tr><td className="px-2 py-1">Checkpointing</td><td className="px-2 py-1">Saves a snapshot of DB state at intervals → faster recovery</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Summary: Interview Cheatsheet */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">✅</span>
        <span className="font-semibold text-lg text-indigo-700">Summary: Interview Cheatsheet</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Topic</th>
              <th className="px-2 py-1 border-b">Key Points</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Transaction</td><td className="px-2 py-1">Logical unit of work. Maintains DB consistency.</td></tr>
            <tr><td className="px-2 py-1">ACID</td><td className="px-2 py-1">Atomicity, Consistency, Isolation, Durability</td></tr>
            <tr><td className="px-2 py-1">Concurrency</td><td className="px-2 py-1">Ensures correct execution of concurrent transactions</td></tr>
            <tr><td className="px-2 py-1">Locking</td><td className="px-2 py-1">Prevents conflicts. Use shared/exclusive locks</td></tr>
            <tr><td className="px-2 py-1">Deadlocks</td><td className="px-2 py-1">Circular waits → prevent using wait-die, wound-wait</td></tr>
            <tr><td className="px-2 py-1">Recovery</td><td className="px-2 py-1">Uses logs, checkpoints to recover from crash</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Quick Code Snippet – Transaction in SQL */}
    <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-cyan-100 rounded-xl p-4 shadow-inner border-l-4 border-blue-300">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">🚀</span>
        <span className="font-semibold text-lg text-blue-700">Quick Code Snippet – Transaction in SQL</span>
      </div>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 500 WHERE acc_id = 'A';

-- Simulated failure (ROLLBACK will discard this)
-- SELECT 1 / 0;

UPDATE accounts SET balance = balance + 500 WHERE acc_id = 'B';

COMMIT;`}</pre>
    </div>
  </div>
) : topic === 'Indexing & Query Optimization' ? (
  <div className="space-y-8">
    {/* Section Title */}
    <div className="flex items-center gap-4 mb-2">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-white shadow-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">Indexing & Query Optimization</h2>
    </div>

    {/* What is Indexing? */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🔍</span>
        <span className="font-semibold text-lg text-blue-700">What is Indexing?</span>
      </div>
      <p className="mb-2">Indexing is a data structure technique used to quickly locate and access the data in a database table without scanning the entire table.</p>
      <p className="text-slate-700 text-sm mb-2">Think of it as an index in a book — it maps a keyword to a page number.</p>
    </div>

    {/* Purpose of Indexing */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-indigo-700">Purpose of Indexing</span>
      </div>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Speeds up SELECT queries</li>
        <li>Reduces disk I/O</li>
        <li>Helps enforce constraints like UNIQUE</li>
        <li>Enables efficient JOINs, ORDER BY, and GROUP BY</li>
      </ul>
    </div>

    {/* How Index Works (Example) */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🔧</span>
        <span className="font-semibold text-lg text-blue-700">How Index Works (Example)</span>
      </div>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`CREATE INDEX idx_name ON Employees(name);`}</pre>
      <p className="mb-2">Now, a query like:</p>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`SELECT * FROM Employees WHERE name = 'Sachin';`}</pre>
      <p className="text-slate-700 text-sm mb-2">uses the index to directly locate the row, avoiding full scan.</p>
    </div>

    {/* Types of Indexes */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🧱</span>
        <span className="font-semibold text-lg text-indigo-700">Types of Indexes</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Index Type</th>
              <th className="px-2 py-1 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Primary Index</td><td className="px-2 py-1">Built on primary key, usually clustered</td></tr>
            <tr><td className="px-2 py-1">Secondary Index</td><td className="px-2 py-1">Built on non-primary key columns</td></tr>
            <tr><td className="px-2 py-1">Unique Index</td><td className="px-2 py-1">Ensures no duplicates in the column</td></tr>
            <tr><td className="px-2 py-1">Composite Index</td><td className="px-2 py-1">Index on multiple columns</td></tr>
            <tr><td className="px-2 py-1">Clustered Index</td><td className="px-2 py-1">Data is physically sorted based on index key</td></tr>
            <tr><td className="px-2 py-1">Non-Clustered Index</td><td className="px-2 py-1">Separate index with pointer to actual data row</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Clustered vs Non-Clustered Index */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">📌</span>
        <span className="font-semibold text-lg text-blue-700">Clustered vs Non-Clustered Index</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Feature</th>
              <th className="px-2 py-1 border-b">Clustered Index</th>
              <th className="px-2 py-1 border-b">Non-Clustered Index</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Data storage</td><td className="px-2 py-1">Sorted based on index</td><td className="px-2 py-1">Data remains unsorted</td></tr>
            <tr><td className="px-2 py-1">Number per table</td><td className="px-2 py-1">Only one (since it sorts the table)</td><td className="px-2 py-1">Multiple allowed</td></tr>
            <tr><td className="px-2 py-1">Speed</td><td className="px-2 py-1">Faster for range queries</td><td className="px-2 py-1">Slower, uses pointers</td></tr>
          </tbody>
        </table>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">🧠 Example:</span>
        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`-- Clustered index on primary key
CREATE CLUSTERED INDEX idx_empid ON Employees(emp_id);

-- Non-clustered index on name
CREATE NONCLUSTERED INDEX idx_name ON Employees(name);`}</pre>
      </div>
    </div>

    {/* B-Tree and B+ Tree Indexing */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🌳</span>
        <span className="font-semibold text-lg text-indigo-700">B-Tree and B+ Tree Indexing</span>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">✅ B-Tree (Balanced Tree)</span>
        <ul className="list-disc pl-6 text-slate-700 text-sm mb-1">
          <li>Self-balancing tree data structure</li>
          <li>Nodes contain keys + pointers to children</li>
          <li>Used for range queries and sorting</li>
        </ul>
        <p className="text-slate-700 text-sm mb-2">📌 Used in: Oracle, PostgreSQL (default)</p>
        <span className="font-semibold text-blue-700">✅ B+ Tree</span>
        <ul className="list-disc pl-6 text-slate-700 text-sm mb-1">
          <li>Leaf nodes store actual data pointers</li>
          <li>Internal nodes only guide traversal</li>
          <li>Faster range queries, as all data is in leaf level</li>
        </ul>
        <p className="text-blue-700 text-sm mb-2">🧠 Key difference: In B+ Tree, data is stored only in leaves, making it better for scanning ranges.</p>
      </div>
    </div>

    {/* Hash Indexing */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">⚙️</span>
        <span className="font-semibold text-lg text-blue-700">Hash Indexing</span>
      </div>
      <p className="mb-2">Hashing uses a hash function to map a key to a bucket (location).</p>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Feature</th>
              <th className="px-2 py-1 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Access time</td><td className="px-2 py-1">O(1) average case</td></tr>
            <tr><td className="px-2 py-1">Limitation</td><td className="px-2 py-1">Not good for range or ordered queries</td></tr>
            <tr><td className="px-2 py-1">Use case</td><td className="px-2 py-1">Point queries (e.g., WHERE id = 100)</td></tr>
          </tbody>
        </table>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">📌 Example: Hash index on email</span>
        <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`CREATE INDEX idx_email ON Users(email) USING HASH;`}</pre>
      </div>
    </div>

    {/* Query Processing & Optimization */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🔁</span>
        <span className="font-semibold text-lg text-indigo-700">Query Processing & Optimization</span>
      </div>
      <p className="mb-2">DBMS uses a query processing pipeline to convert SQL to an optimized execution plan.</p>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Phase</th>
              <th className="px-2 py-1 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Parsing</td><td className="px-2 py-1">Checks syntax & converts SQL to query tree</td></tr>
            <tr><td className="px-2 py-1">Translation</td><td className="px-2 py-1">Converts query tree to relational algebra</td></tr>
            <tr><td className="px-2 py-1">Optimization</td><td className="px-2 py-1">Chooses fastest execution plan using cost-based analysis</td></tr>
            <tr><td className="px-2 py-1">Execution</td><td className="px-2 py-1">Runs query using chosen plan</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Query Optimization Techniques */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🧠</span>
        <span className="font-semibold text-lg text-blue-700">Query Optimization Techniques</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Technique</th>
              <th className="px-2 py-1 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Heuristic Optimization</td><td className="px-2 py-1">Apply transformation rules to improve plan</td></tr>
            <tr><td className="px-2 py-1">Cost-Based Optimization</td><td className="px-2 py-1">Estimate cost using I/O, CPU, stats, and choose best</td></tr>
            <tr><td className="px-2 py-1">Predicate Pushdown</td><td className="px-2 py-1">Apply WHERE clause as early as possible</td></tr>
            <tr><td className="px-2 py-1">Join Ordering</td><td className="px-2 py-1">Use selective filters and small tables first</td></tr>
            <tr><td className="px-2 py-1">Index Scan vs Table Scan</td><td className="px-2 py-1">Prefer index where available</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Example: Optimization Plan */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🧪</span>
        <span className="font-semibold text-lg text-indigo-700">Example: Optimization Plan</span>
      </div>
      <span className="font-semibold text-blue-700">SQL Query:</span>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`SELECT name FROM Employees WHERE dept = 'IT' AND salary > 60000;`}</pre>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>💡 Optimizer may:</li>
        <li>Use idx_dept and idx_salary</li>
        <li>Apply AND condition at index scan level</li>
        <li>Avoid full table scan</li>
      </ul>
    </div>

    {/* Additional Interview Tips */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🧠</span>
        <span className="font-semibold text-lg text-blue-700">Additional Interview Tips</span>
      </div>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>When to use Indexes: Large tables, frequent reads, WHERE clauses</li>
        <li>When to avoid Indexes: Small tables, frequent writes (INSERT/UPDATE/DELETE), low selectivity columns</li>
        <li>How indexes impact performance: Help reads, slow down writes</li>
      </ul>
    </div>

    {/* Summary Cheatsheet */}
    <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-cyan-100 rounded-xl p-4 shadow-inner border-l-4 border-blue-300">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-blue-700">Summary Cheatsheet</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Concept</th>
              <th className="px-2 py-1 border-b">Key Point</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Index</td><td className="px-2 py-1">Data structure to speed up retrieval</td></tr>
            <tr><td className="px-2 py-1">Clustered Index</td><td className="px-2 py-1">Data physically ordered (only one)</td></tr>
            <tr><td className="px-2 py-1">Non-Clustered Index</td><td className="px-2 py-1">Pointers to data (can have many)</td></tr>
            <tr><td className="px-2 py-1">B+ Tree</td><td className="px-2 py-1">Efficient for range queries; data in leaves</td></tr>
            <tr><td className="px-2 py-1">Hashing</td><td className="px-2 py-1">Constant time access, poor for ranges</td></tr>
            <tr><td className="px-2 py-1">Optimization</td><td className="px-2 py-1">DBMS rewrites and reorders query using cost-based rules</td></tr>
            <tr><td className="px-2 py-1">Best Practices</td><td className="px-2 py-1">Use on high-read, high-selectivity columns; avoid over-indexing</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
) : topic === 'Procedural & Programmatic Features' ? (
  <div className="space-y-8">
    {/* Section Title */}
    <div className="flex items-center gap-4 mb-2">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-white shadow-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m9-6a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">Procedural & Programmatic Features</h2>
    </div>

    {/* Purpose */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🎯</span>
        <span className="font-semibold text-lg text-blue-700">Purpose</span>
      </div>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Automation of tasks (e.g., audit trails)</li>
        <li>Code reuse (via stored procedures/functions)</li>
        <li>Better performance by reducing round-trips between app and DB</li>
      </ul>
    </div>

    {/* 1. Stored Procedures */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">📘</span>
        <span className="font-semibold text-lg text-indigo-700">1. Stored Procedures</span>
      </div>
      <p className="mb-2">A stored procedure is a named, precompiled block of SQL and procedural logic stored in the database.</p>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Accepts parameters</li>
        <li>Can include control statements (IF, WHILE)</li>
        <li>Improves modularity, reusability, and performance</li>
      </ul>
      <span className="font-semibold text-blue-700">📌 Syntax (MySQL):</span>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`DELIMITER //
CREATE PROCEDURE GetEmployeeByDept(IN deptName VARCHAR(20))
BEGIN
    SELECT * FROM Employees WHERE department = deptName;
END //
DELIMITER ;`}</pre>
      <span className="font-semibold text-blue-700">📈 Use Cases:</span>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Batch operations (e.g., payroll)</li>
        <li>Complex calculations</li>
        <li>Data validation before insert/update</li>
      </ul>
    </div>

    {/* 2. Stored Functions */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">📘</span>
        <span className="font-semibold text-lg text-blue-700">2. Stored Functions</span>
      </div>
      <p className="mb-2">A stored function is similar to a procedure, but it returns a value and is often used inside SQL queries.</p>
      <span className="font-semibold text-blue-700">✅ Syntax:</span>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`DELIMITER //
CREATE FUNCTION GetTotalSalary(deptName VARCHAR(20))
RETURNS DECIMAL(10,2)
BEGIN
    DECLARE total DECIMAL(10,2);
    SELECT SUM(salary) INTO total FROM Employees WHERE department = deptName;
    RETURN total;
END //
DELIMITER ;`}</pre>
      <span className="font-semibold text-blue-700">📈 Use Cases:</span>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Return computed values</li>
        <li>Use in SELECT queries like:</li>
      </ul>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`SELECT GetTotalSalary('IT');`}</pre>
    </div>

    {/* 3. Triggers */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">📘</span>
        <span className="font-semibold text-lg text-indigo-700">3. Triggers</span>
      </div>
      <p className="mb-2">A trigger is a procedure that is automatically executed in response to certain events on a table (INSERT, UPDATE, DELETE).</p>
      <span className="font-semibold text-blue-700">✅ Syntax:</span>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`CREATE TRIGGER log_insert
AFTER INSERT ON Employees
FOR EACH ROW
INSERT INTO AuditLog(emp_id, action, timestamp)
VALUES (NEW.emp_id, 'INSERT', NOW());`}</pre>
      <span className="font-semibold text-blue-700">📈 Use Cases:</span>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Maintain audit logs</li>
        <li>Auto-update related records</li>
        <li>Enforce complex constraints</li>
      </ul>
    </div>

    {/* Trigger vs Stored Procedure */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🆚</span>
        <span className="font-semibold text-lg text-blue-700">Trigger vs Stored Procedure</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Feature</th>
              <th className="px-2 py-1 border-b">Trigger</th>
              <th className="px-2 py-1 border-b">Stored Procedure</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Invocation</td><td className="px-2 py-1">Auto-triggered on DML event</td><td className="px-2 py-1">Manually called by user or app</td></tr>
            <tr><td className="px-2 py-1">Usage</td><td className="px-2 py-1">Auditing, enforcing rules</td><td className="px-2 py-1">Business logic, batch operations</td></tr>
            <tr><td className="px-2 py-1">Parameters</td><td className="px-2 py-1">No</td><td className="px-2 py-1">Yes</td></tr>
            <tr><td className="px-2 py-1">Return Value</td><td className="px-2 py-1">No</td><td className="px-2 py-1">Optional (in functions)</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* 4. Cursors */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">📘</span>
        <span className="font-semibold text-lg text-indigo-700">4. Cursors</span>
      </div>
      <p className="mb-2">A cursor is a pointer to a result set, allowing row-by-row processing of query results — useful in procedural logic when set-based operations aren't enough.</p>
      <span className="font-semibold text-blue-700">✅ Lifecycle:</span>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>DECLARE cursor</li>
        <li>OPEN cursor</li>
        <li>FETCH row</li>
        <li>CLOSE cursor</li>
      </ul>
      <span className="font-semibold text-blue-700">📌 Syntax:</span>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`DECLARE done INT DEFAULT FALSE;
DECLARE empName VARCHAR(100);
DECLARE emp_cursor CURSOR FOR SELECT name FROM Employees;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

OPEN emp_cursor;
read_loop: LOOP
    FETCH emp_cursor INTO empName;
    IF done THEN
        LEAVE read_loop;
    END IF;
    -- Do something with empName
END LOOP;
CLOSE emp_cursor;`}</pre>
      <span className="font-semibold text-blue-700">📈 Use Cases:</span>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Custom row-by-row operations</li>
        <li>Generating custom reports</li>
        <li>Complex validations during batch updates</li>
      </ul>
    </div>

    {/* Summary Cheatsheet */}
    <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-cyan-100 rounded-xl p-4 shadow-inner border-l-4 border-blue-300">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-blue-700">Summary Cheatsheet</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Concept</th>
              <th className="px-2 py-1 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Stored Procedure</td><td className="px-2 py-1">Precompiled SQL logic, reusable, takes parameters</td></tr>
            <tr><td className="px-2 py-1">Stored Function</td><td className="px-2 py-1">Like procedures but return a value, usable in SELECT</td></tr>
            <tr><td className="px-2 py-1">Trigger</td><td className="px-2 py-1">Auto-executed logic on INSERT/UPDATE/DELETE</td></tr>
            <tr><td className="px-2 py-1">Cursor</td><td className="px-2 py-1">Iterates over query results row-by-row</td></tr>
            <tr><td className="px-2 py-1">Use Cases</td><td className="px-2 py-1">Business logic, automation, auditing, conditional operations</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
) : topic === 'Storage, Backup & Data Warehousing' ? (
  <div className="space-y-8">
    {/* Section Title */}
    <div className="flex items-center gap-4 mb-2">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-white shadow-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" /></svg>
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">Storage, Backup & Data Warehousing</h2>
    </div>

    {/* Purpose */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🎯</span>
        <span className="font-semibold text-lg text-blue-700">Purpose</span>
      </div>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Persistently stored</li>
        <li>Securely backed up and recovered</li>
        <li>Efficiently queried in large-scale analytical systems</li>
      </ul>
    </div>

    {/* 1. Storage in DBMS */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🗃️</span>
        <span className="font-semibold text-lg text-indigo-700">1. Storage in DBMS</span>
      </div>
      <span className="font-semibold text-blue-700">✅ DBMS Storage Hierarchy:</span>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Layer</th>
              <th className="px-2 py-1 border-b">Example</th>
              <th className="px-2 py-1 border-b">Speed</th>
              <th className="px-2 py-1 border-b">Volatility</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Cache</td><td className="px-2 py-1">CPU cache, DB Buffer Cache</td><td className="px-2 py-1">Very Fast</td><td className="px-2 py-1">Volatile</td></tr>
            <tr><td className="px-2 py-1">Main Memory</td><td className="px-2 py-1">RAM</td><td className="px-2 py-1">Fast</td><td className="px-2 py-1">Volatile</td></tr>
            <tr><td className="px-2 py-1">Secondary Storage</td><td className="px-2 py-1">HDD, SSD</td><td className="px-2 py-1">Slower</td><td className="px-2 py-1">Non-Volatile</td></tr>
            <tr><td className="px-2 py-1">Archival Storage</td><td className="px-2 py-1">Tapes, Cold Storage</td><td className="px-2 py-1">Slow</td><td className="px-2 py-1">Non-Volatile</td></tr>
          </tbody>
        </table>
      </div>
      <span className="font-semibold text-blue-700">📌 How DBMS uses storage:</span>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Data Files: Actual user data</li>
        <li>Index Files: Improve retrieval</li>
        <li>Log Files: For transaction recovery</li>
        <li>System Catalog: Metadata about schema, users, constraints, etc.</li>
      </ul>
    </div>

    {/* 2. Data Warehousing */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🧠</span>
        <span className="font-semibold text-lg text-blue-700">2. Data Warehousing</span>
      </div>
      <p className="mb-2">A Data Warehouse (DW) is a centralized repository designed for analytical processing (OLAP), not transactional processing (OLTP).</p>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Subject-oriented</li>
        <li>Time-variant</li>
        <li>Non-volatile</li>
        <li>Integrated from multiple sources</li>
      </ul>
      <span className="font-semibold text-blue-700">📌 Example Architecture:</span>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`[Operational DBs] --> [ETL Process] --> [Data Warehouse] --> [BI Tools, Dashboards]`}</pre>
      <span className="font-semibold text-blue-700">📘 Example Use Case:</span>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Sales trend analysis</li>
        <li>Customer behavior analytics</li>
        <li>Inventory optimization</li>
      </ul>
    </div>

    {/* 3. Backup Mechanisms */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">💾</span>
        <span className="font-semibold text-lg text-indigo-700">3. Backup Mechanisms</span>
      </div>
      <p className="mb-2">A backup is a snapshot of the database at a given point in time, used for recovery after failure.</p>
      <span className="font-semibold text-blue-700">🔄 Types of Backup:</span>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Type</th>
              <th className="px-2 py-1 border-b">Description</th>
              <th className="px-2 py-1 border-b">Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Full Backup</td><td className="px-2 py-1">Complete snapshot of entire DB</td><td className="px-2 py-1">Weekly full snapshot</td></tr>
            <tr><td className="px-2 py-1">Incremental</td><td className="px-2 py-1">Stores changes since last backup</td><td className="px-2 py-1">Daily backup between fulls</td></tr>
            <tr><td className="px-2 py-1">Differential</td><td className="px-2 py-1">Changes since last full backup</td><td className="px-2 py-1">Restore faster than incremental</td></tr>
          </tbody>
        </table>
      </div>
      <span className="font-semibold text-blue-700">📌 Example Strategy:</span>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Sunday: Full backup</li>
        <li>Monday–Saturday: Incremental</li>
        <li>This saves storage & speeds up recovery.</li>
      </ul>
    </div>

    {/* 4. Integrity & Security in DBMS */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🔐</span>
        <span className="font-semibold text-lg text-blue-700">4. Integrity & Security in DBMS</span>
      </div>
      <span className="font-semibold text-blue-700">✅ Data Integrity:</span>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Enforced using constraints: Primary Key, Foreign Key, NOT NULL, CHECK</li>
      </ul>
      <span className="font-semibold text-blue-700">✅ Security:</span>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Authentication: Username/password, roles</li>
        <li>Authorization: GRANT, REVOKE permissions</li>
        <li>Auditing: Log who did what and when</li>
        <li>Encryption: Protects data at rest and in transit</li>
      </ul>
      <span className="font-semibold text-blue-700">📌 Example:</span>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`GRANT SELECT, UPDATE ON Employees TO 'analyst_user';`}</pre>
    </div>

    {/* 5. Data Partitioning */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">📂</span>
        <span className="font-semibold text-lg text-indigo-700">5. Data Partitioning</span>
      </div>
      <p className="mb-2">Partitioning splits a large table into smaller, manageable pieces, improving performance and scalability.</p>
      <span className="font-semibold text-blue-700">✅ Types:</span>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Partitioning Type</th>
              <th className="px-2 py-1 border-b">Description</th>
              <th className="px-2 py-1 border-b">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Horizontal Partitioning</td><td className="px-2 py-1">Rows split based on range or list</td><td className="px-2 py-1">Partition sales data by region</td></tr>
            <tr><td className="px-2 py-1">Vertical Partitioning</td><td className="px-2 py-1">Columns split into different tables</td><td className="px-2 py-1">Separate employee details & salary</td></tr>
            <tr><td className="px-2 py-1">Hash Partitioning</td><td className="px-2 py-1">Rows assigned via a hash function</td><td className="px-2 py-1">Hash(customer_id) % 4 partitions</td></tr>
          </tbody>
        </table>
      </div>
      <span className="font-semibold text-blue-700">📌 Example (PostgreSQL):</span>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`CREATE TABLE sales (
  id INT, region TEXT, amount INT
) PARTITION BY LIST (region);

CREATE TABLE sales_east PARTITION OF sales FOR VALUES IN ('East');
CREATE TABLE sales_west PARTITION OF sales FOR VALUES IN ('West');`}</pre>
    </div>

    {/* Summary Cheatsheet */}
    <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-cyan-100 rounded-xl p-4 shadow-inner border-l-4 border-blue-300">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-blue-700">Summary Cheatsheet</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Concept</th>
              <th className="px-2 py-1 border-b">Key Points</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Storage</td><td className="px-2 py-1">Uses buffer cache, logs, and data files for efficient access and persistence</td></tr>
            <tr><td className="px-2 py-1">Data Warehouse</td><td className="px-2 py-1">Analytical system for reporting and decision making</td></tr>
            <tr><td className="px-2 py-1">Backup</td><td className="px-2 py-1">Full, incremental, differential — protects from data loss</td></tr>
            <tr><td className="px-2 py-1">Integrity & Security</td><td className="px-2 py-1">Ensures correctness and protection using constraints, roles, auditing</td></tr>
            <tr><td className="px-2 py-1">Partitioning</td><td className="px-2 py-1">Improves performance by splitting tables by rows or columns</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
) : topic === 'Database Management & Administration' ? (
  <div className="space-y-8">
    {/* Section Title */}
    <div className="flex items-center gap-4 mb-2">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-white shadow-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">Database Management & Administration (DBA)</h2>
    </div>

    {/* Purpose */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🎯</span>
        <span className="font-semibold text-lg text-blue-700">Purpose</span>
      </div>
      <p className="mb-2">To ensure that the database system is efficient, secure, available, and reliable.</p>
      <p className="text-slate-700 text-sm mb-2">Focuses on the languages used, roles of DBAs, and tools/utilities for effective DBMS operation.</p>
    </div>

    {/* 1. DBMS Languages */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🗣️</span>
        <span className="font-semibold text-lg text-indigo-700">1. DBMS Languages</span>
      </div>
      <p className="mb-2">A DBMS uses different languages for data definition, manipulation, access control, and transaction control.</p>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Language</th>
              <th className="px-2 py-1 border-b">Full Form</th>
              <th className="px-2 py-1 border-b">Purpose</th>
              <th className="px-2 py-1 border-b">Example Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">DDL</td><td className="px-2 py-1">Data Definition Language</td><td className="px-2 py-1">Defines structure of schema objects</td><td className="px-2 py-1">CREATE TABLE, ALTER</td></tr>
            <tr><td className="px-2 py-1">DML</td><td className="px-2 py-1">Data Manipulation Language</td><td className="px-2 py-1">For CRUD operations on data</td><td className="px-2 py-1">SELECT, INSERT, UPDATE, DELETE</td></tr>
            <tr><td className="px-2 py-1">DCL</td><td className="px-2 py-1">Data Control Language</td><td className="px-2 py-1">Manages permissions and access</td><td className="px-2 py-1">GRANT, REVOKE</td></tr>
            <tr><td className="px-2 py-1">TCL</td><td className="px-2 py-1">Transaction Control Language</td><td className="px-2 py-1">Ensures atomicity of transactions</td><td className="px-2 py-1">COMMIT, ROLLBACK, SAVEPOINT</td></tr>
          </tbody>
        </table>
      </div>
      <span className="font-semibold text-blue-700">📘 Example Snippet:</span>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`-- DDL
CREATE TABLE Students (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  age INT
);

-- DML
INSERT INTO Students VALUES (1, 'Alice', 22);

-- DCL
GRANT SELECT ON Students TO 'analyst';

-- TCL
COMMIT;`}</pre>
    </div>

    {/* 2. Role of the Database Administrator (DBA) */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🛠️</span>
        <span className="font-semibold text-lg text-blue-700">2. Role of the Database Administrator (DBA)</span>
      </div>
      <p className="mb-2">A Database Administrator (DBA) is responsible for the setup, management, security, and tuning of a database system.</p>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Function</th>
              <th className="px-2 py-1 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Installation</td><td className="px-2 py-1">Install and configure DBMS software</td></tr>
            <tr><td className="px-2 py-1">User Management</td><td className="px-2 py-1">Create, manage, and control user access using roles and privileges</td></tr>
            <tr><td className="px-2 py-1">Backup & Recovery</td><td className="px-2 py-1">Ensure data durability through periodic backups and robust recovery plans</td></tr>
            <tr><td className="px-2 py-1">Performance Tuning</td><td className="px-2 py-1">Analyze slow queries, optimize indexing and buffer usage</td></tr>
            <tr><td className="px-2 py-1">Security Management</td><td className="px-2 py-1">Enforce access control, encryption, and audit trails</td></tr>
            <tr><td className="px-2 py-1">Storage Allocation</td><td className="px-2 py-1">Monitor and allocate storage resources effectively</td></tr>
            <tr><td className="px-2 py-1">Schema Design Oversight</td><td className="px-2 py-1">Assist or review logical and physical schema design</td></tr>
          </tbody>
        </table>
      </div>
      <span className="font-semibold text-blue-700">📘 Tools Commonly Used by DBAs:</span>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Oracle Enterprise Manager</li>
        <li>MySQL Workbench</li>
        <li>pgAdmin (PostgreSQL)</li>
        <li>SQL Server Management Studio (SSMS)</li>
        <li>Monitoring Tools: Nagios, Prometheus, Zabbix</li>
      </ul>
      <span className="font-semibold text-blue-700">🔐 Example: Access Control by a DBA</span>
      <pre className="bg-slate-100 p-3 rounded-md overflow-auto text-sm mt-1">{`-- Creating a new user
CREATE USER analyst IDENTIFIED BY 'securePass';

-- Granting read-only access to analyst
GRANT SELECT ON Employees TO analyst;`}</pre>
    </div>

    {/* 3. Utilities and Management Tools in DBMS */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">🔧</span>
        <span className="font-semibold text-lg text-indigo-700">3. Utilities and Management Tools in DBMS</span>
      </div>
      <p className="mb-2">DBMS systems provide several utilities to help DBAs manage operations:</p>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Utility/Tool</th>
              <th className="px-2 py-1 border-b">Function</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Export/Import Tools</td><td className="px-2 py-1">Migrate data across systems or backup/restore</td></tr>
            <tr><td className="px-2 py-1">DBCC (SQL Server)</td><td className="px-2 py-1">Check database integrity and fix minor issues</td></tr>
            <tr><td className="px-2 py-1">Explain Plan</td><td className="px-2 py-1">Visualize query execution path</td></tr>
            <tr><td className="px-2 py-1">Replication Tools</td><td className="px-2 py-1">Setup distributed systems for high availability</td></tr>
            <tr><td className="px-2 py-1">Scheduler Jobs</td><td className="px-2 py-1">Automate backups, indexing, statistics gathering</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Interview-Relevant Insights */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-500 text-xl">📚</span>
        <span className="font-semibold text-lg text-blue-700">Interview-Relevant Insights</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Concept</th>
              <th className="px-2 py-1 border-b">Why It's Important for Interviews</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Separation of DBMS Languages</td><td className="px-2 py-1">Shows understanding of how systems operate and are controlled</td></tr>
            <tr><td className="px-2 py-1">Granular DBA Role</td><td className="px-2 py-1">Clarifies responsibilities and gives insight into job readiness</td></tr>
            <tr><td className="px-2 py-1">Backup Strategy</td><td className="px-2 py-1">Common real-world problem-solving scenario</td></tr>
            <tr><td className="px-2 py-1">Security & Auditing</td><td className="px-2 py-1">Critical for compliance-heavy industries (e.g., finance, healthcare)</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Summary Cheatsheet */}
    <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-cyan-100 rounded-xl p-4 shadow-inner border-l-4 border-blue-300">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-blue-700">Summary Cheatsheet</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-2 py-1 border-b">Component</th>
              <th className="px-2 py-1 border-b">Key Points</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">DBMS Languages</td><td className="px-2 py-1">DDL (structure), DML (data access), DCL (permissions), TCL (transactions)</td></tr>
            <tr><td className="px-2 py-1">DBA Role</td><td className="px-2 py-1">Handles performance, security, backup, access, tuning</td></tr>
            <tr><td className="px-2 py-1">Utilities</td><td className="px-2 py-1">Include tools for replication, tuning, exporting/importing</td></tr>
            <tr><td className="px-2 py-1">Interview Focus</td><td className="px-2 py-1">Real-world scenarios like access control, failure recovery, schema tuning</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
) 


// ... existing code ...
: topic === 'Data Modeling & Database Design' ? (
  <div className="space-y-8">
    {/* ...existing Data Modeling & Database Design content... */}
  </div>
) : topic === 'Database Structure: Tables, Keys, and Constraints' ? (
  <div className="space-y-8">
    {/* Section Title */}
    <div className="flex items-center gap-4 mb-2">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-white shadow-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">Database Structure: Tables, Keys, and Constraints</h2>
    </div>

    {/* 1. What is a Relation in DBMS? */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">📘</span>
        <span className="font-semibold text-lg text-blue-700">Understanding Data Organization and Linkage in DBMS: Relations, Keys, and Constraints</span>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">What is a Relation in DBMS?</span>
        <p>A relation in a Relational Database Management System (RDBMS) is a mathematical concept derived from relational algebra. It represents a set of tuples (rows) sharing the same attributes (columns). In practical terms, a relation = table in a database. Each tuple = row. Each attribute = column name.</p>
        <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
          <li>No duplicate tuples (rows)</li>
          <li>Tuples are unordered</li>
          <li>Attributes are atomic (no multi-valued fields)</li>
        </ul>
        <div className="overflow-x-auto mb-2">
          <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
            <thead>
              <tr className="bg-indigo-50 text-indigo-700">
                <th className="px-2 py-1 border-b">StudentID</th>
                <th className="px-2 py-1 border-b">Name</th>
                <th className="px-2 py-1 border-b">Age</th>
                <th className="px-2 py-1 border-b">Dept</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-2 py-1">101</td><td className="px-2 py-1">Alice</td><td className="px-2 py-1">20</td><td className="px-2 py-1">CSE</td></tr>
              <tr><td className="px-2 py-1">102</td><td className="px-2 py-1">Bob</td><td className="px-2 py-1">21</td><td className="px-2 py-1">IT</td></tr>
            </tbody>
          </table>
        </div>
        <span className="text-green-700 text-sm font-semibold">✅ This Student table is a relation with 2 tuples and 4 attributes.</span>
      </div>
    </div>

    {/* 2. What is a Table in DBMS? */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">🔹</span>
        <span className="font-semibold text-lg text-indigo-700">What is a Table in DBMS?</span>
      </div>
      <p>A table is a physical implementation of a relation. It is a named collection of data organized in rows and columns. Rows represent individual records. Columns represent attributes of the data. A table is defined by a schema, which specifies attribute name, data type, and constraints (e.g., NOT NULL, UNIQUE).</p>
      <div className="overflow-x-auto mb-2">
        <pre className="bg-slate-50 rounded p-2 text-xs overflow-x-auto"><code>{`CREATE TABLE Student (\n  StudentID INT PRIMARY KEY,\n  Name VARCHAR(50) NOT NULL,\n  Age INT,\n  Dept VARCHAR(30)\n);`}</code></pre>
      </div>
    </div>

    {/* 3. What are Rows and Columns in DBMS? */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">🔹</span>
        <span className="font-semibold text-lg text-blue-700">What are Rows and Columns in DBMS?</span>
      </div>
      <p>Rows (also called records or tuples): Each row holds a single data item (entity) and its attribute values. Columns: Represent the properties or fields of the entity. Each column has a name and a data type.</p>
      <span className="text-slate-700 text-sm">Example: In the Student table above, the row (101, 'Alice', 20, 'CSE') is a record, and StudentID, Name, etc., are columns.</span>
    </div>

    {/* 4. Keys in DBMS */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">🔑</span>
        <span className="font-semibold text-lg text-indigo-700">Keys in DBMS</span>
      </div>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Uniquely identify records</li>
        <li>Establish relationships between tables</li>
        <li>Enforce data integrity</li>
      </ul>
    </div>

    {/* 5. Primary Key */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">🔹</span>
        <span className="font-semibold text-lg text-blue-700">Primary Key</span>
      </div>
      <p>A primary key is a field (or combination of fields) that uniquely identifies each row in a table. Properties: Must be unique, NOT NULL, Only one primary key per table.</p>
      <div className="overflow-x-auto mb-2">
        <pre className="bg-slate-50 rounded p-2 text-xs overflow-x-auto"><code>{`CREATE TABLE Employee (\n  EmpID INT PRIMARY KEY,\n  Name VARCHAR(50),\n  Salary FLOAT\n);`}</code></pre>
      </div>
      <span className="text-slate-700 text-sm">Here, EmpID is the primary key.</span>
    </div>

    {/* 6. Foreign Key */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">🔹</span>
        <span className="font-semibold text-lg text-indigo-700">Foreign Key</span>
      </div>
      <p>A foreign key is a column in one table that references the primary key of another table. Purpose: Establish relationships between tables, Enforce referential integrity.</p>
      <div className="overflow-x-auto mb-2">
        <pre className="bg-slate-50 rounded p-2 text-xs overflow-x-auto"><code>{`CREATE TABLE Department (\n  DeptID INT PRIMARY KEY,\n  DeptName VARCHAR(30)\n);\n\nCREATE TABLE Employee (\n  EmpID INT PRIMARY KEY,\n  Name VARCHAR(50),\n  DeptID INT,\n  FOREIGN KEY (DeptID) REFERENCES Department(DeptID)\n);`}</code></pre>
      </div>
    </div>

    {/* 7. Candidate Key */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">🔹</span>
        <span className="font-semibold text-lg text-blue-700">Candidate Key</span>
      </div>
      <p>A candidate key is a minimal set of attributes that can uniquely identify a tuple. A table can have multiple candidate keys. The primary key is chosen from among the candidate keys.</p>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">RollNo</th>
              <th className="px-2 py-1 border-b">Email</th>
              <th className="px-2 py-1 border-b">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">101</td><td className="px-2 py-1">alice@example.com</td><td className="px-2 py-1">Alice</td></tr>
          </tbody>
        </table>
      </div>
      <span className="text-slate-700 text-sm">Candidate Keys: RollNo, Email<br/>Primary Key (chosen): RollNo</span>
    </div>

    {/* 8. Superkey vs Candidate Key */}
<div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
  <div className="flex items-center gap-2 mb-2">
    <span className="text-blue-600 text-xl">🔹</span>
    <span className="font-semibold text-lg text-indigo-700">Superkey vs Candidate Key</span>
  </div>
  <div className="overflow-x-auto mb-2">
    <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
      <thead>
        <tr className="bg-indigo-50 text-indigo-700">
          <th className="px-2 py-1 border-b">Criteria</th>
          <th className="px-2 py-1 border-b">Super Key</th>
          <th className="px-2 py-1 border-b">Candidate Key</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-2 py-1">Definition</td>
          <td className="px-2 py-1">A set of one or more attributes that uniquely identify a row</td>
          <td className="px-2 py-1">A minimal set of attributes that can uniquely identify a row</td>
        </tr>
        <tr>
          <td className="px-2 py-1">Redundancy</td>
          <td className="px-2 py-1">May include unnecessary extra attributes</td>
          <td className="px-2 py-1">No redundant attributes; it's minimal</td>
        </tr>
        <tr>
          <td className="px-2 py-1">Uniqueness</td>
          <td className="px-2 py-1">Always unique</td>
          <td className="px-2 py-1">Always unique and minimal</td>
        </tr>
        <tr>
          <td className="px-2 py-1">Example</td>
          <td className="px-2 py-1">{"{StudentID, FullName}, {EmailID}"}</td>
          <td className="px-2 py-1">{"{StudentID}, {EmailID}"}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


    {/* 9. Primary Key vs Unique Key */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">🔹</span>
        <span className="font-semibold text-lg text-blue-700">Primary Key vs Unique Key</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Feature</th>
              <th className="px-2 py-1 border-b">Primary Key</th>
              <th className="px-2 py-1 border-b">Unique Key</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">Uniqueness</td><td className="px-2 py-1">Enforced</td><td className="px-2 py-1">Enforced</td></tr>
            <tr><td className="px-2 py-1">NULL values</td><td className="px-2 py-1">Not allowed</td><td className="px-2 py-1">Allowed (only one NULL)</td></tr>
            <tr><td className="px-2 py-1">Number per table</td><td className="px-2 py-1">Only one</td><td className="px-2 py-1">Multiple allowed</td></tr>
            <tr><td className="px-2 py-1">Used for</td><td className="px-2 py-1">Row identification</td><td className="px-2 py-1">Enforcing data uniqueness</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* 10. Constraints in DBMS */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">📌</span>
        <span className="font-semibold text-lg text-indigo-700">Constraints in DBMS</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Constraint</th>
              <th className="px-2 py-1 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">NOT NULL</td><td className="px-2 py-1">Column cannot have NULL values</td></tr>
            <tr><td className="px-2 py-1">UNIQUE</td><td className="px-2 py-1">Ensures unique values across rows</td></tr>
            <tr><td className="px-2 py-1">PRIMARY KEY</td><td className="px-2 py-1">Uniquely identifies rows (NOT NULL + UNIQUE)</td></tr>
            <tr><td className="px-2 py-1">FOREIGN KEY</td><td className="px-2 py-1">References primary key of another table</td></tr>
            <tr><td className="px-2 py-1">CHECK</td><td className="px-2 py-1">Validates values against a condition</td></tr>
            <tr><td className="px-2 py-1">DEFAULT</td><td className="px-2 py-1">Sets default value if none is provided</td></tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto mb-2">
        <pre className="bg-slate-50 rounded p-2 text-xs overflow-x-auto"><code>{`CREATE TABLE Orders (\n  OrderID INT PRIMARY KEY,\n  Quantity INT CHECK (Quantity > 0),\n  Status VARCHAR(20) DEFAULT 'Pending'\n);`}</code></pre>
      </div>
    </div>

    {/* 11. Referential Integrity */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">🔗</span>
        <span className="font-semibold text-lg text-blue-700">Referential Integrity</span>
      </div>
      <p>Referential Integrity ensures that the value of a foreign key in a child table matches a valid value in the parent table. If a record in the parent is deleted or modified, the database ensures that dependent records are handled appropriately.</p>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>ON DELETE CASCADE – Deletes child records</li>
        <li>ON UPDATE CASCADE – Updates foreign key values</li>
        <li>SET NULL – Sets the foreign key value to NULL</li>
      </ul>
      <div className="overflow-x-auto mb-2">
        <pre className="bg-slate-50 rounded p-2 text-xs overflow-x-auto"><code>{`CREATE TABLE Course (\n  CourseID INT PRIMARY KEY,\n  Name VARCHAR(100)\n);\n\nCREATE TABLE Enrollment (\n  StudentID INT,\n  CourseID INT,\n  FOREIGN KEY (CourseID) REFERENCES Course(CourseID)\n  ON DELETE CASCADE\n);`}</code></pre>
      </div>
      <span className="text-slate-700 text-sm">If a course is deleted, all enrollments for that course are deleted too.</span>
    </div>

    {/* 12. Advantages of Foreign Keys */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">✅</span>
        <span className="font-semibold text-lg text-indigo-700">Advantages of Foreign Keys</span>
      </div>
      <ul className="list-disc pl-6 text-slate-700 text-sm mb-2">
        <li>Maintain data consistency across related tables</li>
        <li>Prevent orphan records</li>
        <li>Facilitate JOIN operations to retrieve related data</li>
        <li>Support relational design principles</li>
      </ul>
    </div>

    {/* 13. Are NULL, Blank, and Zero the Same? */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">❓</span>
        <span className="font-semibold text-lg text-blue-700">Are NULL, Blank, and Zero the Same?</span>
      </div>
      <div className="overflow-x-auto mb-2">
        <table className="min-w-[320px] w-full text-sm border border-slate-200 rounded-lg">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700">
              <th className="px-2 py-1 border-b">Term</th>
              <th className="px-2 py-1 border-b">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">NULL</td><td className="px-2 py-1">Unknown or missing value</td></tr>
            <tr><td className="px-2 py-1">Blank</td><td className="px-2 py-1">Empty string '', still a known value</td></tr>
            <tr><td className="px-2 py-1">Zero</td><td className="px-2 py-1">Numeric value 0, not NULL or blank</td></tr>
          </tbody>
        </table>
      </div>
      <span className="text-green-700 text-sm font-semibold">✅ NULL ≠ Blank ≠ 0</span>
    </div>

    {/* Additional Interview-Relevant Concepts */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">🔍</span>
        <span className="font-semibold text-lg text-indigo-700">Additional Interview-Relevant Concepts</span>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">Composite Key</span>
        <p>A composite key is a combination of two or more columns used together to uniquely identify a row.</p>
        <div className="overflow-x-auto mb-2">
          <pre className="bg-slate-50 rounded p-2 text-xs overflow-x-auto"><code>{`CREATE TABLE Enrollment (\n  StudentID INT,\n  CourseID INT,\n  PRIMARY KEY (StudentID, CourseID)\n);`}</code></pre>
        </div>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-blue-700">Surrogate Key</span>
        <p>A surrogate key is an artificial, system-generated key (like an auto-increment ID) used as a primary key instead of using natural attributes.</p>
        <div className="overflow-x-auto mb-2">
          <pre className="bg-slate-50 rounded p-2 text-xs overflow-x-auto"><code>{`CREATE TABLE Users (\n  UserID INT AUTO_INCREMENT PRIMARY KEY,\n  Email VARCHAR(100) UNIQUE\n);`}</code></pre>
        </div>
      </div>
    </div>

    {/* Conclusion */}
    <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-cyan-100 rounded-xl p-4 shadow-inner border-l-4 border-blue-300">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">🎯</span>
        <span className="font-semibold text-lg text-blue-700">Conclusion</span>
      </div>
      <p>Understanding how data is organized and linked through relations, keys, and constraints is foundational to designing efficient, consistent, and scalable databases. These concepts ensure data integrity, support relational operations, and are crucial in real-world applications and interview scenarios.</p>
      <ul className="list-disc pl-6 text-slate-700 text-sm">
        <li>✅ Always normalize your tables, choose meaningful keys, and apply constraints to enforce business rules effectively.</li>
      </ul>
    </div>
  </div>
)
// ... existing code ...


: topic === 'Most Relevant Interview Questions' ? (
  <div className="space-y-10">
    {/* Section Title */}
    <div className="flex items-center gap-4 mb-2">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-white shadow-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">Most Relevant Interview Questions</h2>
    </div>

    {/* 1. Fundamentals of DBMS & Architecture */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-blue-500 text-xl">🔹</span>
        <span className="font-semibold text-lg text-blue-700">1. Fundamentals of DBMS & Architecture</span>
      </div>
      <div className="text-slate-700 text-sm mb-1">Purpose: Build a foundational understanding of what a DBMS is, why it exists, and its architectural structure.</div>
      <ul className="list-disc pl-6 text-slate-700 text-sm space-y-1">
        <li>What is meant by DBMS and what is its utility?</li>
        <li>What is meant by a database?</li>
        <li>Mention the issues with traditional file-based systems that make DBMS a better choice.</li>
        <li>Explain a few advantages of a DBMS.</li>
        <li>What is the difference between DBMS and RDBMS?</li>
        <li>What are the different types of DBMS?</li>
        <li>How is DBMS different from a file-based system?</li>
        <li>What is the difference between a 2-tier and 3-tier architecture in DBMS?</li>
        <li>Explain different levels of data abstraction in a DBMS.</li>
        <li>What are the primary components of a DBMS?</li>
      </ul>
    </div>

    {/* 2. Data Modeling & Database Design */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-indigo-500 text-xl">🔹</span>
        <span className="font-semibold text-lg text-indigo-700">2. Data Modeling & Database Design</span>
      </div>
      <div className="text-slate-700 text-sm mb-1">Purpose: Understand how data is modeled conceptually and logically before it's implemented in a database.</div>
      <ul className="list-disc pl-6 text-slate-700 text-sm space-y-1">
        <li>What is meant by an entity-relationship (E-R) model?</li>
        <li>Explain the terms Entity, Entity Type, and Entity Set in DBMS.</li>
        <li>What is an entity-relationship diagram (ERD)?</li>
        <li>What are the differences between an ER diagram and a relational schema?</li>
        <li>Explain the concept of a schema in DBMS.</li>
        <li>Explain the difference between intension and extension in a database.</li>
        <li>Explain different types of relationships among tables in a DBMS.</li>
        <li>What are the different types of relationships in DBMS?</li>
      </ul>
    </div>

    {/* 3. Database Structure: Tables, Keys, and Constraints */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-blue-500 text-xl">🔹</span>
        <span className="font-semibold text-lg text-blue-700">3. Database Structure: Tables, Keys, and Constraints</span>
      </div>
      <div className="text-slate-700 text-sm mb-1">Purpose: Understand how data is organized and linked via keys and constraints.</div>
      <ul className="list-disc pl-6 text-slate-700 text-sm space-y-1">
        <li>What is a relation in DBMS?</li>
        <li>What is a table in DBMS?</li>
        <li>What are rows and columns in DBMS?</li>
        <li>Explain different types of keys in a database.</li>
        <li>What is a primary key?</li>
        <li>What is a foreign key?</li>
        <li>What is a candidate key in DBMS?</li>
        <li>What is the difference between a superkey and a candidate key?</li>
        <li>Explain the difference between a primary key and a unique key.</li>
        <li>What are the different types of constraints in DBMS?</li>
        <li>What is referential integrity in DBMS?</li>
        <li>What are the advantages of using foreign keys in DBMS?</li>
        <li>Are NULL values in a database the same as blank space or zero?</li>
      </ul>
    </div>

    {/* 4. SQL Operations and Queries */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-indigo-500 text-xl">🔹</span>
        <span className="font-semibold text-lg text-indigo-700">4. SQL Operations and Queries</span>
      </div>
      <div className="text-slate-700 text-sm mb-1">Purpose: Learn to manipulate and retrieve data using SQL.</div>
      <ul className="list-disc pl-6 text-slate-700 text-sm space-y-1">
        <li>What is the use of the SQL SELECT statement?</li>
        <li>What is a view in DBMS?</li>
        <li>What is a materialized view in DBMS?</li>
        <li>What is a subquery in SQL?</li>
        <li>What are aggregate functions in SQL?</li>
        <li>What is the purpose of the GROUP BY clause in SQL?</li>
        <li>What is the use of the "WITH CHECK OPTION" in SQL views?</li>
        <li>What is the difference between DELETE and TRUNCATE in SQL?</li>
        <li>Explain the difference between the DELETE and TRUNCATE command in a DBMS.</li>
        <li>What is the difference between INNER JOIN and OUTER JOIN?</li>
        <li>What is a join in SQL? Name and explain different types of joins.</li>
        <li>What is the difference between UNION and UNION ALL in SQL?</li>
      </ul>
    </div>

    {/* 5. Data Normalization and Design Quality */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-blue-500 text-xl">🔹</span>
        <span className="font-semibold text-lg text-blue-700">5. Data Normalization and Design Quality</span>
      </div>
      <div className="text-slate-700 text-sm mb-1">Purpose: Ensure efficient data storage and eliminate redundancy.</div>
      <ul className="list-disc pl-6 text-slate-700 text-sm space-y-1">
        <li>What is meant by normalization and denormalization?</li>
        <li>What is normalization? Why is it important in DBMS?</li>
        <li>What is denormalization? How does it differ from normalization?</li>
        <li>Explain different types of normalization forms in DBMS.</li>
        <li>What is a normalization form? Explain different normalization forms.</li>
        <li>What are the various types of normalization techniques? Explain with examples.</li>
        <li>What is data redundancy in a database? How can it be reduced?</li>
      </ul>
    </div>

    {/* 6. Transactions, Concurrency & Recovery */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-indigo-500 text-xl">🔹</span>
        <span className="font-semibold text-lg text-indigo-700">6. Transactions, Concurrency & Recovery</span>
      </div>
      <div className="text-slate-700 text-sm mb-1">Purpose: Maintain consistency and integrity in multi-user and failure-prone environments.</div>
      <ul className="list-disc pl-6 text-slate-700 text-sm space-y-1">
        <li>What is a transaction in DBMS? What are the properties of a transaction?</li>
        <li>What is the ACID property in DBMS?</li>
        <li>What is meant by ACID properties in DBMS?</li>
        <li>What is the importance of the COMMIT and ROLLBACK operations?</li>
        <li>What is a lock? Explain the major difference between a shared lock and an exclusive lock.</li>
        <li>What are the different types of database locks?</li>
        <li>What is a deadlock in DBMS? How can it be prevented?</li>
        <li>How does DBMS handle concurrency control?</li>
        <li>What is a transaction log in DBMS?</li>
      </ul>
    </div>

    {/* 7. Indexing & Query Optimization */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-blue-500 text-xl">🔹</span>
        <span className="font-semibold text-lg text-blue-700">7. Indexing & Query Optimization</span>
      </div>
      <div className="text-slate-700 text-sm mb-1">Purpose: Improve performance of data retrieval and manipulation.</div>
      <ul className="list-disc pl-6 text-slate-700 text-sm space-y-1">
        <li>What is an index in DBMS and how is it used?</li>
        <li>Explain the concept of indexing in DBMS.</li>
        <li>What is the difference between a clustered and non-clustered index?</li>
        <li>Explain the concept of a B-tree and B+ tree in DBMS.</li>
        <li>What is a hashing technique in DBMS? How does it work?</li>
        <li>What are the different phases of the DBMS query processing cycle?</li>
      </ul>
    </div>

    {/* 8. Procedural & Programmatic Features */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-indigo-500 text-xl">🔹</span>
        <span className="font-semibold text-lg text-indigo-700">8. Procedural & Programmatic Features</span>
      </div>
      <div className="text-slate-700 text-sm mb-1">Purpose: Understand advanced logic and automation within the database system.</div>
      <ul className="list-disc pl-6 text-slate-700 text-sm space-y-1">
        <li>Explain the concept of a stored procedure in DBMS.</li>
        <li>What are stored functions in DBMS?</li>
        <li>What are triggers in DBMS?</li>
        <li>What is the difference between a trigger and a stored procedure?</li>
        <li>What is a database cursor? How is it used?</li>
      </ul>
    </div>

    {/* 9. Storage, Backup & Data Warehousing */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-blue-400 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-blue-500 text-xl">🔹</span>
        <span className="font-semibold text-lg text-blue-700">9. Storage, Backup & Data Warehousing</span>
      </div>
      <div className="text-slate-700 text-sm mb-1">Purpose: Learn about persistent storage, backup mechanisms, and large-scale data systems.</div>
      <ul className="list-disc pl-6 text-slate-700 text-sm space-y-1">
        <li>What is meant by Data Warehousing?</li>
        <li>What are the different types of backups in DBMS?</li>
        <li>What is the role of the DBMS in handling data integrity and security?</li>
        <li>Explain the concept of data partitioning in DBMS.</li>
      </ul>
    </div>

    {/* 10. Database Management & Administration */}
    <div className="bg-white/80 rounded-xl p-4 shadow-md border-l-4 border-indigo-400 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-indigo-500 text-xl">🔹</span>
        <span className="font-semibold text-lg text-indigo-700">10. Database Management & Administration</span>
      </div>
      <div className="text-slate-700 text-sm mb-1">Purpose: Explore roles, tools, and utilities involved in operating a DBMS.</div>
      <ul className="list-disc pl-6 text-slate-700 text-sm space-y-1">
        <li>Explain different languages present in DBMS.</li>
        <li>What is the role of the Database Administrator (DBA)?</li>
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

const DBMS = () => {
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
            Database Management Systems (DBMS)
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-2 font-medium animate-slide-in-up">
            Master the core concepts of DBMS with a modern, structured flow
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

export default DBMS;