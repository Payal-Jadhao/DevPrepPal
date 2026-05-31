import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const subjectFlowTopics = [
  'Introduction to Networking',
  'Network Devices and Components',
  'IP Addressing and Subnetting',
  'OSI Model',
  'Layer 1: Physical Layer',
  'Layer 2: Data Link Layer',
  'Layer 3: Network Layer',
  'Layer 4: Transport Layer',
  'Layer 5: Session Layer',
  'Layer 6: Presentation Layer',
  'Layer 7: Application Layer',
  'TCP/IP Model and Protocol Stack',
  'Wireless & Modern Networking Technologies',
  'Virtualization and Secure Networking',
  'Advanced Routing and Traffic Management',
  'Network Monitoring & Troubleshooting',
  'Cloud and Enterprise Networking',
];

const detailedTopics = [
  'Introduction to Networking',
  'Network Devices and Components',
  'IP Addressing and Subnetting',
  'OSI Model',
  'Layer 1: Physical Layer',
  'Layer 2: Data Link Layer',
  'Layer 3: Network Layer',
  'Layer 4: Transport Layer',
  'Layer 5: Session Layer',
  'Layer 6: Presentation Layer',
  'Layer 7: Application Layer',
  'TCP/IP Model and Protocol Stack',
  'Wireless & Modern Networking Technologies',
  'Virtualization and Secure Networking',
  'Advanced Routing and Traffic Management',
  'Network Monitoring & Troubleshooting',
  'Cloud and Enterprise Networking',
  'Relevant Interview Questions'
];

function SubjectFlowBar({ topics, activeIdx, setActiveIdx }) {
  return (
    <div className="w-full overflow-x-auto pb-4 mb-30 flex justify-center" style={{ background: 'white' }}>
      <div className="inline-flex gap-10 min-w-full px-2">
        {topics.map((topic, idx) => (
          <button
            key={topic}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`relative flex flex-col items-center group transition-transform duration-300 focus:outline-none bg-white border border-slate-200 shadow-md ${
              activeIdx === idx ? 'scale-110 z-10 ring-2 ring-indigo-200/60' : 'hover:scale-105'
            }`}
            style={{ minWidth: 220, background: 'white' }}
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
              style={{ boxShadow: activeIdx === idx ? '0 0 16px 4px #6366f1aa' : undefined, background: 'white' }}
            >
              <span className="font-bold text-lg select-none" style={{ background: 'white' }}>{idx + 1}</span>
            </span>
            {/* Label */}
            <span
              className={`mt-2 text-xs font-medium transition-colors duration-300 whitespace-nowrap ${
                activeIdx === idx
                  ? 'text-indigo-700'
                  : 'text-slate-800 group-hover:text-indigo-500'
              }`}
              style={{ background: 'white' }}
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
                  {topic === 'Introduction to Networking' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">📘 Chapter 1: Introduction to Networking</h2>
                      </div>
                    <div className="space-y-6">
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 What is Networking?</span>
                          <p>Networking refers to the practice of connecting multiple computing devices (computers, servers, IoT devices, etc.) to share resources and information efficiently. A computer network enables communication and data exchange through wired or wireless mediums, using protocols such as <span className="font-semibold">TCP/IP</span>.</p>
                        </div>
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Classification of Networks</span>
                          <ul className="list-disc ml-6">
                            <li><span className="font-semibold">Geographical Area:</span> LAN, WAN, MAN, PAN</li>
                            <li><span className="font-semibold">Ownership:</span> Private vs Public</li>
                            <li><span className="font-semibold">Topology:</span> Star, Ring, Mesh, etc.</li>
                            <li><span className="font-semibold">Architecture:</span> Peer-to-peer vs Client-server</li>
                          </ul>
                        </div>
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Types of Networks</span>
                          <ul className="list-disc ml-6">
                            <li><span className="font-semibold">LAN (Local Area Network):</span> Connects devices within a limited area like a home, office, or building. Offers high speed and low latency.</li>
                            <li><span className="font-semibold">WAN (Wide Area Network):</span> Covers large geographical areas (e.g., the Internet). Operates over leased telecom lines.</li>
                            <li><span className="font-semibold">MAN (Metropolitan Area Network):</span> Larger than LAN, covers a city or campus.</li>
                            <li><span className="font-semibold">PAN (Personal Area Network):</span> Short-range network (e.g., Bluetooth, USB connections).</li>
                          </ul>
                        </div>
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Nodes and Links</span>
                          <ul className="list-disc ml-6">
                            <li><span className="font-semibold">Node:</span> Any device (computer, router, switch, etc.) connected to the network.</li>
                            <li><span className="font-semibold">Link:</span> The communication pathway (wired or wireless) between two nodes.</li>
                          </ul>
                        </div>
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Network Topology</span>
                          <p>Network topology defines the physical or logical arrangement of nodes and links in a network.</p>
                          <ul className="list-disc ml-6">
                            <li><span className="font-semibold">Bus:</span> Single backbone cable; easy but not scalable.</li>
                            <li><span className="font-semibold">Star:</span> Central device (like a switch); reliable and widely used.</li>
                            <li><span className="font-semibold">Ring:</span> Each device connects to two others; token-based communication.</li>
                            <li><span className="font-semibold">Mesh:</span> Every node connects to every other; highly redundant.</li>
                            <li><span className="font-semibold">Hybrid:</span> Combination of two or more topologies.</li>
                          </ul>
                        </div>
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Hub vs Switch</span>
                          <div className="overflow-x-auto">
                            <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                              <thead>
                                <tr className="bg-indigo-50 text-indigo-700">
                                  <th className="px-3 py-2 font-semibold">Feature</th>
                                  <th className="px-3 py-2 font-semibold">Hub</th>
                                  <th className="px-3 py-2 font-semibold">Switch</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Layer</td>
                                  <td className="px-3 py-2">Physical (L1)</td>
                                  <td className="px-3 py-2">Data Link (L2)</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Traffic</td>
                                  <td className="px-3 py-2">Broadcasts to all devices</td>
                                  <td className="px-3 py-2">Unicast to intended port</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Efficiency</td>
                                  <td className="px-3 py-2">Low</td>
                                  <td className="px-3 py-2">High</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Use</td>
                                  <td className="px-3 py-2">Obsolete</td>
                                  <td className="px-3 py-2">Standard in modern LANs</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Purpose of Hub</span>
                          <p>Historically used to connect multiple Ethernet devices in a LAN, a hub simply relays incoming signals to all ports. It is now outdated due to inefficiency and lack of security.</p>
                        </div>
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Switch in Networking</span>
                          <p>A switch filters and forwards data frames based on MAC addresses. It reduces collision domains, improves performance, and supports VLANs. It's a backbone device in modern Ethernet networks.</p>
                        </div>
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Role of Router</span>
                          <p>A router connects different networks (e.g., LAN to WAN) and determines the best path for data packets using IP addresses. It operates at Layer 3 (Network Layer) and often includes features like NAT, DHCP, and firewall.</p>
                        </div>
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Gateway in Networking</span>
                          <p>A gateway is a network node that acts as an entry and exit point between different systems, often converting between different protocols. It can operate at multiple layers and is essential for connecting dissimilar networks (e.g., a LAN to the Internet).</p>
                        </div>
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Router vs Gateway</span>
                          <div className="overflow-x-auto">
                            <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                              <thead>
                                <tr className="bg-indigo-50 text-indigo-700">
                                  <th className="px-3 py-2 font-semibold">Feature</th>
                                  <th className="px-3 py-2 font-semibold">Router</th>
                                  <th className="px-3 py-2 font-semibold">Gateway</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Function</td>
                                  <td className="px-3 py-2">Forwards packets between networks</td>
                                  <td className="px-3 py-2">Connects networks with different protocols</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Layer</td>
                                  <td className="px-3 py-2">Layer 3 (Network)</td>
                                  <td className="px-3 py-2">Can span multiple layers</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Role</td>
                                  <td className="px-3 py-2">Routing</td>
                                  <td className="px-3 py-2">Protocol translation + Routing</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Layer 2 vs Layer 3 Switch</span>
                          <div className="overflow-x-auto">
                            <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                              <thead>
                                <tr className="bg-indigo-50 text-indigo-700">
                                  <th className="px-3 py-2 font-semibold">Feature</th>
                                  <th className="px-3 py-2 font-semibold">Layer 2 Switch</th>
                                  <th className="px-3 py-2 font-semibold">Layer 3 Switch</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Layer</td>
                                  <td className="px-3 py-2">Data Link (L2)</td>
                                  <td className="px-3 py-2">Network (L3)</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Uses</td>
                                  <td className="px-3 py-2">Switching within LAN</td>
                                  <td className="px-3 py-2">Inter-VLAN routing, L3 forwarding</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Speed</td>
                                  <td className="px-3 py-2">Faster for L2 tasks</td>
                                  <td className="px-3 py-2">Slightly slower due to routing logic</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Network Devices and Components' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">📘 Chapter 2: Network Devices and Components</h2>
                      </div>
                      <div className="text-slate-700 text-base">Modern networks rely on a variety of hardware and software components to ensure connectivity, performance, and security. Understanding these components is essential for troubleshooting, designing, and securing enterprise and internet-scale networks.</div>
                    <div className="space-y-6">
                        {/* NIC */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 1. Network Adapter (NIC – Network Interface Card)</span>
                          <p>A Network Adapter is a hardware component that connects a computer or device to a network. It can be integrated into the motherboard or be a separate expansion card. It assigns the device a MAC address, handles frame-level communication, and converts digital signals to electrical or wireless signals.</p>
                          <ul className="list-disc ml-6 mt-2">
                            <li><span className="font-semibold">Ethernet NIC (wired)</span></li>
                            <li><span className="font-semibold">Wi-Fi NIC (wireless)</span></li>
                          </ul>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> Be ready to explain how NICs work with MAC addresses and OSI Layer 2.</div>
                        </div>
                        {/* Modem */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 2. Modem (Modulator-Demodulator)</span>
                          <p>A modem converts digital data from a computer into analog signals for transmission over analog mediums like telephone lines and vice versa. It enables Internet connectivity via DSL, cable, or fiber.</p>
                          <ul className="list-disc ml-6 mt-2">
                            <li><span className="font-semibold">Key Role:</span> Used in broadband Internet connections to communicate with ISP infrastructure. Operates between digital LAN and analog WAN.</li>
                          </ul>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> Mention DSL and cable modem differences when asked.</div>
                        </div>
                        {/* Firewall */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 3. Firewall</span>
                          <p>A firewall is a security system—hardware, software, or both—that monitors and filters incoming and outgoing network traffic based on predefined security rules. It acts as a barrier between trusted and untrusted networks, typically between an internal LAN and the Internet.</p>
                          <ul className="list-disc ml-6 mt-2">
                            <li>Packet-filtering firewall (Layer 3)</li>
                            <li>Stateful inspection firewall</li>
                            <li>Application-layer firewall (Layer 7)</li>
                            <li>Next-Generation Firewall (NGFW)</li>
                          </ul>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> Expect questions on stateful vs. stateless firewalls and where to place them in a network.</div>
                        </div>
                        {/* Proxy Server */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 4. Proxy Server</span>
                          <p>A proxy server is an intermediary between a client and a destination server. It forwards client requests to the target server and returns the response. It can provide anonymity, content filtering, caching, and access control.</p>
                          <ul className="list-disc ml-6 mt-2">
                            <li>Caching static content to reduce load</li>
                            <li>Bypassing geo-restrictions</li>
                            <li>Blocking malicious sites</li>
                          </ul>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> You may be asked to differentiate between transparent and anonymous proxies.</div>
                        </div>
                        {/* Reverse Proxy */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 5. Reverse Proxy</span>
                          <p>A reverse proxy accepts requests from external clients on behalf of backend servers. It hides server details, improves load distribution, and enhances security.</p>
                          <div className="overflow-x-auto mt-2">
                            <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                              <thead>
                                <tr className="bg-indigo-50 text-indigo-700">
                                  <th className="px-3 py-2 font-semibold">Aspect</th>
                                  <th className="px-3 py-2 font-semibold">Forward Proxy</th>
                                  <th className="px-3 py-2 font-semibold">Reverse Proxy</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Clients</td>
                                  <td className="px-3 py-2">Internal clients</td>
                                  <td className="px-3 py-2">External clients</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Acts on behalf of</td>
                                  <td className="px-3 py-2">Client</td>
                                  <td className="px-3 py-2">Server</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Use Case</td>
                                  <td className="px-3 py-2">Bypass, filtering, anonymity</td>
                                  <td className="px-3 py-2">Load balancing, caching, SSL offloading</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> Often used in large-scale web applications like NGINX, Apache, or AWS CloudFront.</div>
                        </div>
                        {/* Load Balancer */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 6. Load Balancer</span>
                          <p>A load balancer distributes incoming network traffic across multiple servers to optimize resource use, maximize throughput, and ensure high availability.</p>
                          <ul className="list-disc ml-6 mt-2">
                            <li><span className="font-semibold">Layer 4 (Transport):</span> Balances based on IP/port</li>
                            <li><span className="font-semibold">Layer 7 (Application):</span> Balances based on HTTP headers, URL, cookies</li>
                          </ul>
                          <div className="mt-2">Benefits:
                            <ul className="list-disc ml-6">
                              <li>Fault tolerance (failover)</li>
                              <li>Scalability</li>
                              <li>Improved user experience</li>
                            </ul>
                          </div>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> Common real-world tools: HAProxy, NGINX, AWS ELB, F5.</div>
                        </div>
                        {/* IDS/IPS */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 7. IDS and IPS (Intrusion Detection/Prevention Systems)</span>
                          <p><span className="font-semibold">IDS (Intrusion Detection System):</span> Monitors network traffic for suspicious activity and raises alerts.</p>
                          <p><span className="font-semibold">IPS (Intrusion Prevention System):</span> Detects and actively blocks or quarantines malicious traffic in real time.</p>
                          <div className="mt-2">Key Difference: <span className="font-semibold">IDS is passive (alert-only), IPS is active (mitigation)</span></div>
                          <div className="mt-2">Modes:
                            <ul className="list-disc ml-6">
                              <li>Signature-based detection</li>
                              <li>Anomaly-based detection</li>
                            </ul>
                          </div>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> Be ready to explain deployment positions: inline (IPS) vs. passive (IDS).</div>
                        </div>
                        {/* Additional Components */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Additional Interview-Relevant Components</span>
                          <div className="overflow-x-auto mt-2">
                            <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                              <thead>
                                <tr className="bg-indigo-50 text-indigo-700">
                                  <th className="px-3 py-2 font-semibold">Component</th>
                                  <th className="px-3 py-2 font-semibold">Purpose</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Access Point</td>
                                  <td className="px-3 py-2">Connects wireless clients to a wired network</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Repeater</td>
                                  <td className="px-3 py-2">Boosts signal over long distances</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Bridge</td>
                                  <td className="px-3 py-2">Connects two LANs to reduce collisions</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Gateway</td>
                                  <td className="px-3 py-2">Connects networks using different protocols</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Network Controller</td>
                                  <td className="px-3 py-2">Centralized control over SDN architecture</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        {/* Summary Table */}
                        <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                          <span className="block text-lg font-bold text-indigo-700 mb-2">✅ Summary Table for Quick Recall</span>
                          <div className="overflow-x-auto">
                            <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                              <thead>
                                <tr className="bg-indigo-100 text-indigo-800">
                                  <th className="px-3 py-2 font-semibold">Device</th>
                                  <th className="px-3 py-2 font-semibold">OSI Layer</th>
                                  <th className="px-3 py-2 font-semibold">Function</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="px-3 py-2">NIC</td>
                                  <td className="px-3 py-2">Layer 2</td>
                                  <td className="px-3 py-2">Connects device to the network</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Modem</td>
                                  <td className="px-3 py-2">Layer 1</td>
                                  <td className="px-3 py-2">Converts analog ↔ digital signals</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Firewall</td>
                                  <td className="px-3 py-2">3 / 4 / 7</td>
                                  <td className="px-3 py-2">Controls incoming/outgoing traffic</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Proxy Server</td>
                                  <td className="px-3 py-2">Layer 7</td>
                                  <td className="px-3 py-2">Acts on behalf of client</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Reverse Proxy</td>
                                  <td className="px-3 py-2">Layer 7</td>
                                  <td className="px-3 py-2">Acts on behalf of server</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Load Balancer</td>
                                  <td className="px-3 py-2">4 / 7</td>
                                  <td className="px-3 py-2">Distributes traffic across servers</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">IDS/IPS</td>
                                  <td className="px-3 py-2">3 / 7</td>
                                  <td className="px-3 py-2">Monitors / blocks suspicious traffic</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="text-slate-600 text-sm mt-2">This chapter builds critical knowledge for interviews, especially for roles involving network security, cloud, and DevOps, where understanding the interaction of these components in real-world architectures is essential.</div>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'IP Addressing and Subnetting' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">📘 Chapter 3: IP Addressing and Subnetting</h2>
                      </div>
                      <div className="text-slate-700 text-base">IP addressing and subnetting are fundamental to how devices identify, communicate, and route data within a network. These concepts define how networks are organized and how traffic flows from one device to another, both internally and across the internet.</div>
                    <div className="space-y-6">
                        {/* IP Address Definition */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 IP Address: Definition</span>
                          <ul className="list-disc ml-6">
                            <li>An IP address (Internet Protocol address) is a unique identifier assigned to each device connected to a network. It enables devices to locate and communicate with each other.</li>
                            <li>Logical address, not hardware-bound (unlike MAC)</li>
                            <li>Essential for routing, communication, and access control</li>
                          </ul>
                        </div>
                        {/* IPv4 Addressing */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 IPv4 Addressing</span>
                          <p>IPv4 (Internet Protocol version 4) is a 32-bit address represented in dotted decimal notation (e.g., 192.168.0.1).</p>
                          <ul className="list-disc ml-6 mt-2">
                            <li><span className="font-semibold">Network ID</span> – identifies the network</li>
                            <li><span className="font-semibold">Host ID</span> – identifies the device within the network</li>
                          </ul>
                        </div>
                        {/* IPv4 Classes */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 IPv4 Classes</span>
                          <div className="overflow-x-auto mt-2">
                            <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                              <thead>
                                <tr className="bg-indigo-50 text-indigo-700">
                                  <th className="px-3 py-2 font-semibold">Class</th>
                                  <th className="px-3 py-2 font-semibold">Range (1st Octet)</th>
                                  <th className="px-3 py-2 font-semibold">Default Subnet Mask</th>
                                  <th className="px-3 py-2 font-semibold">Use Case</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="px-3 py-2">A</td>
                                  <td className="px-3 py-2">1 – 126</td>
                                  <td className="px-3 py-2">255.0.0.0</td>
                                  <td className="px-3 py-2">Very large networks</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">B</td>
                                  <td className="px-3 py-2">128 – 191</td>
                                  <td className="px-3 py-2">255.255.0.0</td>
                                  <td className="px-3 py-2">Medium-sized networks</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">C</td>
                                  <td className="px-3 py-2">192 – 223</td>
                                  <td className="px-3 py-2">255.255.255.0</td>
                                  <td className="px-3 py-2">Small networks</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">D</td>
                                  <td className="px-3 py-2">224 – 239</td>
                                  <td className="px-3 py-2">-</td>
                                  <td className="px-3 py-2">Multicasting</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">E</td>
                                  <td className="px-3 py-2">240 – 255</td>
                                  <td className="px-3 py-2">-</td>
                                  <td className="px-3 py-2">Reserved for research</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> Interviewers often expect you to quickly identify class ranges and subnet masks.</div>
                        </div>
                        {/* Private vs Public IP Addresses */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Private vs Public IP Addresses</span>
                          <div className="overflow-x-auto mt-2">
                            <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                              <thead>
                                <tr className="bg-indigo-50 text-indigo-700">
                                  <th className="px-3 py-2 font-semibold">Type</th>
                                  <th className="px-3 py-2 font-semibold">Example Ranges</th>
                                  <th className="px-3 py-2 font-semibold">Scope</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Private</td>
                                  <td className="px-3 py-2">10.0.0.0 – 10.255.255.255<br/>172.16.0.0 – 172.31.255.255<br/>192.168.0.0 – 192.168.255.255</td>
                                  <td className="px-3 py-2">Internal use</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Public</td>
                                  <td className="px-3 py-2">All other routable addresses</td>
                                  <td className="px-3 py-2">Internet-facing</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> Private IPs require NAT to communicate externally.</div>
                        </div>
                        {/* Special IP Addresses */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Special IP Addresses</span>
                          <ul className="list-disc ml-6">
                            <li><span className="font-semibold">127.0.0.1</span> → Loopback address (localhost)</li>
                            <li><span className="font-semibold">169.254.x.x</span> → APIPA (automatic private IP assignment)</li>
                            <li><span className="font-semibold">255.255.255.255</span> → Broadcast</li>
                            <li><span className="font-semibold">0.0.0.0</span> → Default/unknown</li>
                          </ul>
                        </div>
                        {/* IPv4 vs IPv6 */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 IPv4 vs IPv6</span>
                          <div className="overflow-x-auto mt-2">
                            <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                              <thead>
                                <tr className="bg-indigo-50 text-indigo-700">
                                  <th className="px-3 py-2 font-semibold">Feature</th>
                                  <th className="px-3 py-2 font-semibold">IPv4</th>
                                  <th className="px-3 py-2 font-semibold">IPv6</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Size</td>
                                  <td className="px-3 py-2">32-bit</td>
                                  <td className="px-3 py-2">128-bit</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Format</td>
                                  <td className="px-3 py-2">Dotted decimal (e.g., 192.0.2.1)</td>
                                  <td className="px-3 py-2">Hexadecimal (e.g., 2001:db8::1)</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Address Space</td>
                                  <td className="px-3 py-2">~4.3 billion</td>
                                  <td className="px-3 py-2">340 undecillion</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">NAT Required</td>
                                  <td className="px-3 py-2">Yes</td>
                                  <td className="px-3 py-2">No</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Security</td>
                                  <td className="px-3 py-2">Optional (via IPSec)</td>
                                  <td className="px-3 py-2">Built-in</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> IPv6 was introduced to resolve IPv4 exhaustion and support IoT scalability.</div>
                        </div>
                        {/* CIDR */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 CIDR (Classless Inter-Domain Routing)</span>
                          <p>CIDR replaces the class-based system. It uses slash notation (e.g., 192.168.10.0/24) to represent variable-length subnet masks, allowing flexible IP allocation and efficient address usage.</p>
                          <ul className="list-disc ml-6 mt-2">
                            <li><span className="font-semibold">/24</span> → 255.255.255.0 → 256 IPs</li>
                            <li><span className="font-semibold">/16</span> → 255.255.0.0 → 65,536 IPs</li>
                          </ul>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> CIDR improves routing efficiency and reduces waste.</div>
                        </div>
                        {/* Subnetting */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Subnetting: Concept and Importance</span>
                          <p>A subnet is a smaller division of an IP network. Subnetting breaks down a large network into smaller, manageable segments, improving performance, security, and traffic isolation.</p>
                          <ul className="list-disc ml-6 mt-2">
                            <li>Minimize broadcast traffic</li>
                            <li>Improve network design</li>
                            <li>Allocate IPs efficiently</li>
                          </ul>
                        </div>
                        {/* Subnet Mask */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Subnet Mask</span>
                          <p>A subnet mask determines which part of the IP is the network ID and which part is the host ID.</p>
                          <div className="mt-2 text-sm bg-slate-50 border-l-4 border-slate-300 rounded px-3 py-2">
                            <span className="font-semibold">Example:</span><br/>
                            <span>IP: 192.168.1.10</span><br/>
                            <span>Subnet Mask: 255.255.255.0</span><br/>
                            <span>Network ID: 192.168.1.0</span><br/>
                            <span>Host ID: .10</span>
                          </div>
                        </div>
                        {/* Default Gateway */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Default Gateway</span>
                          <p>A default gateway is a device (typically a router) that forwards packets from a local network to other networks. It is used when the destination IP is outside the local subnet.</p>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> In interviews, be prepared to explain how a PC uses the gateway to reach the internet.</div>
                        </div>
                        {/* Static vs Dynamic IP Addresses */}
                        <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                          <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Static vs Dynamic IP Addresses</span>
                          <div className="overflow-x-auto mt-2">
                            <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                              <thead>
                                <tr className="bg-indigo-50 text-indigo-700">
                                  <th className="px-3 py-2 font-semibold">Type</th>
                                  <th className="px-3 py-2 font-semibold">Description</th>
                                  <th className="px-3 py-2 font-semibold">Use Case</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Static</td>
                                  <td className="px-3 py-2">Manually configured, fixed IP</td>
                                  <td className="px-3 py-2">Servers, printers</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Dynamic</td>
                                  <td className="px-3 py-2">Assigned by DHCP, can change</td>
                                  <td className="px-3 py-2">Home devices, DHCP clients</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2"><span className="font-semibold">💡 Interview Tip:</span> Static IPs ensure consistency, while dynamic IPs simplify configuration.</div>
                        </div>
                        {/* Quick Summary Table */}
                        <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                          <span className="block text-lg font-bold text-indigo-700 mb-2">✅ Quick Summary Table</span>
                          <div className="overflow-x-auto">
                            <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                              <thead>
                                <tr className="bg-indigo-100 text-indigo-800">
                                  <th className="px-3 py-2 font-semibold">Term</th>
                                  <th className="px-3 py-2 font-semibold">Definition/Use</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="px-3 py-2">IP Address</td>
                                  <td className="px-3 py-2">Unique network identifier</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">IPv4</td>
                                  <td className="px-3 py-2">32-bit format (e.g., 192.168.1.1)</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">IPv6</td>
                                  <td className="px-3 py-2">128-bit format (e.g., 2001:db8::1)</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">CIDR</td>
                                  <td className="px-3 py-2">Slash notation for flexible subnetting</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Subnet Mask</td>
                                  <td className="px-3 py-2">Separates network and host portions</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Default Gateway</td>
                                  <td className="px-3 py-2">Path to external networks</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Static IP</td>
                                  <td className="px-3 py-2">Manually set, fixed</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Dynamic IP</td>
                                  <td className="px-3 py-2">Automatically assigned via DHCP</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Private IP</td>
                                  <td className="px-3 py-2">Internal use, not internet routable</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-3 py-2">Public IP</td>
                                  <td className="px-3 py-2">Globally routable</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="text-slate-600 text-sm mt-2">This chapter is critical for mastering address planning, network configuration, and interview problem-solving scenarios such as subnetting calculations, gateway misconfiguration, or IP address conflict resolution.</div>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'OSI Model' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">OSI Model: Interview-Focused Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">What is the OSI Model?</span>
                        <p>The <span className="font-semibold">OSI (Open Systems Interconnection) Model</span> is a conceptual framework used to understand and standardize how different networking systems communicate over a network. It was developed by the ISO (International Organization for Standardization) and divides network communication into 7 hierarchical layers, each with a specific function and set of protocols. <span className="font-semibold">It is a reference model, not an implementation.</span></p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">⚙️ Purpose of OSI Model (Why it matters in interviews):</span>
                        <ul className="list-disc ml-6">
                          <li>Promotes interoperability between vendors.</li>
                          <li>Helps troubleshoot issues by isolating faults to specific layers.</li>
                          <li>Separates hardware (lower layers) from software (upper layers) responsibilities.</li>
                          <li>Often used in system design and network diagnostics discussions.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">The 7 Layers of the OSI Model (Top to Bottom)</span>
                        <div className="overflow-x-auto mt-2">
                          <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-3 py-2 font-semibold">Layer</th>
                                <th className="px-3 py-2 font-semibold">Name</th>
                                <th className="px-3 py-2 font-semibold">Function</th>
                                <th className="px-3 py-2 font-semibold">Example Protocols</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="px-3 py-2">7</td>
                                <td className="px-3 py-2">Application</td>
                                <td className="px-3 py-2">User interface, network services (email, browser)</td>
                                <td className="px-3 py-2">HTTP, FTP, SMTP</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">6</td>
                                <td className="px-3 py-2">Presentation</td>
                                <td className="px-3 py-2">Data formatting, encryption, compression</td>
                                <td className="px-3 py-2">SSL, TLS, JPEG</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">5</td>
                                <td className="px-3 py-2">Session</td>
                                <td className="px-3 py-2">Session establishment, maintenance, termination</td>
                                <td className="px-3 py-2">NetBIOS, RPC</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">4</td>
                                <td className="px-3 py-2">Transport</td>
                                <td className="px-3 py-2">Reliable data transfer, flow control, segmentation</td>
                                <td className="px-3 py-2">TCP, UDP</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">3</td>
                                <td className="px-3 py-2">Network</td>
                                <td className="px-3 py-2">Routing, logical addressing</td>
                                <td className="px-3 py-2">IP, ICMP</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">2</td>
                                <td className="px-3 py-2">Data Link</td>
                                <td className="px-3 py-2">MAC addressing, error detection (Frame handling)</td>
                                <td className="px-3 py-2">Ethernet, PPP</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">1</td>
                                <td className="px-3 py-2">Physical</td>
                                <td className="px-3 py-2">Transmission of raw bits over physical medium</td>
                                <td className="px-3 py-2">Cables, Hubs</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">OSI Model Data Flow: What Happens at Each Layer?</span>
                        <div className="mb-2 font-semibold text-indigo-700">Sender Side:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Application Layer:</span> User interacts with app (e.g., browser); request created (e.g., HTTP GET). Data is generated and passed down.</li>
                          <li><span className="font-semibold">Presentation Layer:</span> Data is translated into a standardized format (e.g., UTF-8). Encryption (SSL/TLS) or compression (ZIP) may be applied.</li>
                          <li><span className="font-semibold">Session Layer:</span> Establishes/maintains session (login, sync) between source and destination.</li>
                          <li><span className="font-semibold">Transport Layer:</span> Breaks data into segments; assigns sequence numbers. Ensures reliable delivery (TCP) or fast delivery (UDP).</li>
                          <li><span className="font-semibold">Network Layer:</span> Adds logical IP addresses; decides routing path for data. Encapsulates data into packets.</li>
                          <li><span className="font-semibold">Data Link Layer:</span> Converts packets to frames; adds MAC addresses. Performs error detection (CRC) and flow control.</li>
                          <li><span className="font-semibold">Physical Layer:</span> Converts frames to binary signals (electrical, optical, or radio) and transmits over medium.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">Receiver Side:</div>
                        <ul className="list-disc ml-6">
                          <li><span className="font-semibold">Physical:</span> Converts signals back to bits.</li>
                          <li><span className="font-semibold">Data Link:</span> Verifies frame, checks for errors, and passes the payload.</li>
                          <li><span className="font-semibold">Network:</span> Reads IP header, routes packet to correct host.</li>
                          <li><span className="font-semibold">Transport:</span> Reorders and reassembles segments, checks reliability.</li>
                          <li><span className="font-semibold">Session:</span> Validates and manages the communication session.</li>
                          <li><span className="font-semibold">Presentation:</span> Decrypts and decodes the message.</li>
                          <li><span className="font-semibold">Application:</span> Displays data to the user (e.g., webpage in browser).</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">Key Interview Notes</span>
                        <div className="mb-2 font-semibold text-indigo-700">Data Unit at Each Layer:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Application/Presentation/Session</span> → Data</li>
                          <li><span className="font-semibold">Transport</span> → Segment</li>
                          <li><span className="font-semibold">Network</span> → Packet</li>
                          <li><span className="font-semibold">Data Link</span> → Frame</li>
                          <li><span className="font-semibold">Physical</span> → Bits</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">Remember mnemonics:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Top-Down:</span> All People Seem To Need Data Processing</li>
                          <li><span className="font-semibold">Bottom-Up (when receiving):</span> Please Do Not Throw Sausage Pizza Away</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">TCP/IP vs OSI:</div>
                        <ul className="list-disc ml-6">
                          <li>OSI has 7 layers; TCP/IP has 4 layers (Application, Transport, Internet, Link).</li>
                          <li>OSI is more theoretical, TCP/IP is more practical.</li>
                        </ul>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Layer 1: Physical Layer' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">Layer 1: Physical Layer — Interview-Specific Networking Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">What is the Physical Layer?</span>
                        <p>The Physical Layer is the first layer of the OSI (Open Systems Interconnection) model. It is responsible for the transmission and reception of raw bit streams over a physical medium—essentially, it defines how data is physically sent from one device to another.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Responsibilities of the Physical Layer:</span>
                        <ul className="list-disc ml-6">
                          <li>Bit-level transmission: Converts digital data into electrical, light, or radio signals.</li>
                          <li>Defines physical characteristics: Includes cable types, connectors, pinouts, voltage levels, and data rates.</li>
                          <li>Data Rate Control: Determines the speed (bits per second) at which bits are transmitted.</li>
                          <li>Physical Topology: Defines the arrangement of devices (star, bus, ring, etc.).</li>
                          <li>Synchronization of bits: Ensures sender and receiver are aligned for accurate data interpretation.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">⚙️ Key Components & Technologies</span>
                        <div className="mb-2 font-semibold text-indigo-700">✅ LAN Cable (Ethernet Cable)</div>
                        <p>A LAN cable, typically a Twisted Pair Cable, connects devices in a Local Area Network. The most common standard is Cat5e or Cat6, supporting high-speed data transfer (up to 1 Gbps or more).</p>
                        <div className="mb-2 font-semibold text-indigo-700 mt-4">✅ Types of Networking Cables:</div>
                        <ul className="list-disc ml-6">
                          <li><span className="font-semibold">Twisted Pair Cable (Cat5e, Cat6, Cat7):</span> Used in most LANs. Consists of pairs of wires twisted together to reduce interference.</li>
                          <li><span className="font-semibold">Coaxial Cable:</span> Common in older broadband and cable TV networks.</li>
                          <li><span className="font-semibold">Fiber Optic Cable:</span> Uses light to transmit data. Immune to EMI (Electromagnetic Interference). Ideal for long-distance and high-speed data transmission.</li>
                        </ul>
                        <div className="overflow-x-auto mt-4">
                          <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-3 py-2 font-semibold">Feature</th>
                                <th className="px-3 py-2 font-semibold">Fiber Optic</th>
                                <th className="px-3 py-2 font-semibold">Copper Cable</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="px-3 py-2">Speed</td>
                                <td className="px-3 py-2">Extremely high (Tbps)</td>
                                <td className="px-3 py-2">Moderate to high (up to Gbps)</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Distance</td>
                                <td className="px-3 py-2">Long (&gt;10 km)</td>
                                <td className="px-3 py-2">Short (&lt;100 meters)</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Interference</td>
                                <td className="px-3 py-2">Immune to EMI</td>
                                <td className="px-3 py-2">Susceptible to EMI</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Cost</td>
                                <td className="px-3 py-2">Expensive</td>
                                <td className="px-3 py-2">Cheaper</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Security</td>
                                <td className="px-3 py-2">More secure</td>
                                <td className="px-3 py-2">Less secure (easier to tap)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">📊 Key Physical Layer Concepts</span>
                        <div className="mb-2 font-semibold text-indigo-700">🔸 Bandwidth</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Definition:</span> The maximum rate at which data can be transferred over a network channel.</li>
                          <li>Measured in bps (bits per second).</li>
                          <li>Higher bandwidth means more data can be transmitted in less time.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">🔸 Latency</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Definition:</span> The delay between the transmission and reception of data.</li>
                          <li>Measured in milliseconds (ms).</li>
                          <li>Affected by propagation delay, processing delay, and transmission delay.</li>
                          <li>Lower latency is crucial for real-time applications like VoIP and gaming.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🧠 Interview-Relevant Concepts</span>
                        <div className="mb-2 font-semibold text-indigo-700">🔹 Transmission Modes:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Simplex:</span> One-way communication (e.g., keyboard to CPU).</li>
                          <li><span className="font-semibold">Half Duplex:</span> Two-way communication, but one direction at a time (e.g., walkie-talkie).</li>
                          <li><span className="font-semibold">Full Duplex:</span> Two-way simultaneous communication (e.g., telephone).</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">🔹 Modulation:</div>
                        <p>Converts digital signals into analog signals for transmission over physical mediums (e.g., DSL lines).</p>
                        <div className="mb-2 font-semibold text-indigo-700">🔹 Encoding Schemes:</div>
                        <p>Converts bits into signals using techniques like NRZ, Manchester Encoding, etc., crucial for signal integrity.</p>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">🧭 Summary</span>
                        <p>The Physical Layer provides the foundation for all network communication by focusing on hardware transmission technologies. For interviews, focus on cabling types, differences between fiber and copper, transmission characteristics (bandwidth, latency), and how raw data is encoded and transmitted. Understanding this layer gives insight into performance issues and infrastructure design in enterprise networks.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Layer 2: Data Link Layer' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">Layer 2: Data Link Layer — Interview-Specific Networking Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">What is the Data Link Layer?</span>
                        <p>The Data Link Layer (Layer 2) of the OSI model is responsible for the reliable transmission of data frames between two nodes connected by a physical layer. It sits just above the Physical Layer and ensures error detection, framing, and flow control at the local (intra-network) level.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Key Responsibilities of the Data Link Layer:</span>
                        <ul className="list-disc ml-6">
                          <li>Framing: Divides data from the Network Layer into manageable units called frames.</li>
                          <li>MAC Addressing: Uses hardware (MAC) addresses to identify source and destination devices on a local network.</li>
                          <li>Error Detection: Detects (but not always corrects) errors introduced in the Physical Layer using techniques like CRC (Cyclic Redundancy Check).</li>
                          <li>Flow Control: Prevents fast senders from overwhelming slow receivers.</li>
                          <li>Access Control: Determines how devices share and access the physical medium (e.g., CSMA/CD in Ethernet).</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">📛 MAC Address and NIC</span>
                        <div className="mb-2 font-semibold text-indigo-700">✅ MAC Address (Media Access Control Address)</div>
                        <p>A unique 48-bit hardware identifier assigned to a Network Interface Card (NIC) by the manufacturer.</p>
                        <div className="mb-2">Format: <span className="font-mono bg-slate-100 px-2 py-1 rounded">00:1A:2B:3C:4D:5E</span></div>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Operates at Layer 2 and is non-routable beyond the local network.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">✅ MAC vs NIC</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">NIC (Network Interface Card):</span> The physical device that connects a computer to a network.</li>
                          <li><span className="font-semibold">MAC Address:</span> The unique Layer 2 address embedded in the NIC.</li>
                        </ul>
                        <div className="overflow-x-auto mt-2">
                          <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-3 py-2 font-semibold">Aspect</th>
                                <th className="px-3 py-2 font-semibold">MAC Address</th>
                                <th className="px-3 py-2 font-semibold">IP Address</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="px-3 py-2">Layer</td>
                                <td className="px-3 py-2">Data Link Layer (Layer 2)</td>
                                <td className="px-3 py-2">Network Layer (Layer 3)</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Type</td>
                                <td className="px-3 py-2">Physical (hardware)</td>
                                <td className="px-3 py-2">Logical (software-assigned)</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Scope</td>
                                <td className="px-3 py-2">Local network</td>
                                <td className="px-3 py-2">Global/Internet</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Permanence</td>
                                <td className="px-3 py-2">Permanent (can be spoofed)</td>
                                <td className="px-3 py-2">Dynamic or Static</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Used by</td>
                                <td className="px-3 py-2">Switches</td>
                                <td className="px-3 py-2">Routers</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">📡 ARP and ARP Cache</span>
                        <div className="mb-2 font-semibold text-indigo-700">✅ ARP (Address Resolution Protocol)</div>
                        <p>A protocol used to map IP addresses to MAC addresses on a local network.</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li>When a host wants to send data to another IP, it broadcasts an ARP request asking, "Who has this IP?"</li>
                          <li>The device with the matching IP replies with its MAC address.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">✅ ARP Cache</div>
                        <p>A temporary table stored in RAM that keeps mappings of IP ↔ MAC addresses to avoid repetitive ARP lookups. Entries expire after a short time to ensure freshness.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🖧 Role of a Switch (Layer 2 Device)</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Switches forward frames based on MAC addresses.</li>
                          <li>Maintains a MAC address table (CAM table) to learn which MAC is on which port.</li>
                          <li>Operates only within the local network, unlike routers.</li>
                          <li>Helps in reducing collisions and improving bandwidth by providing dedicated communication paths (full-duplex).</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🧠 Interview-Relevant Concepts</span>
                        <div className="mb-2 font-semibold text-indigo-700">🔹 Frame Structure</div>
                        <p>A frame typically includes: Header (MAC source/destination), Payload, and Trailer (CRC).</p>
                        <div className="mb-2 font-semibold text-indigo-700">🔹 Sub-layers:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">LLC (Logical Link Control):</span> Interface between the network and MAC sublayer. Responsible for flow and error control.</li>
                          <li><span className="font-semibold">MAC (Media Access Control):</span> Manages how devices access and use the physical medium.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">🔹 Error Detection (Not Correction)</div>
                        <p>CRC (Cyclic Redundancy Check) is used in Ethernet to detect errors, but not correct them.</p>
                        <div className="mb-2 font-semibold text-indigo-700">🔹 Duplex Communication</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Full Duplex:</span> Both devices can send and receive simultaneously.</li>
                          <li><span className="font-semibold">Half Duplex:</span> Only one device can send at a time (CSMA/CD helps here).</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">🧭 Summary</span>
                        <p>The Data Link Layer ensures reliable and efficient delivery of data frames across a local network. It handles MAC addressing, frame delimiting, error detection, and medium access control. For interviews, focus on how it interacts with switches, how ARP resolves IP-to-MAC mappings, and why MAC addresses are essential for intra-network communication. Understanding this layer is crucial for diagnosing LAN issues and understanding how data traverses within a subnet.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Layer 3: Network Layer' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">Network Layer (Layer 3) – OSI Model</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">What is the Network Layer?</span>
                        <p>The Network Layer is responsible for determining the best path for data transmission across interconnected networks. It handles logical addressing, routing, and packet forwarding to ensure end-to-end communication between devices in different networks.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">📌 Core Responsibilities of the Network Layer:</span>
                        <ul className="list-disc ml-6">
                          <li>Logical addressing: Assigns IP addresses to devices (IPv4/IPv6).</li>
                          <li>Routing: Determines the optimal path for packet delivery.</li>
                          <li>Fragmentation: Breaks large packets into smaller ones if the underlying data link layer cannot handle them.</li>
                          <li>Packet forwarding: Sends data to the next hop based on the routing table.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🧭 IP Routing</span>
                        <p>Routing is the process of selecting paths in a network along which to send data packets. Routers use routing tables to determine the best route. There are two primary types:</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Static Routing:</span> Routes are manually configured by an admin.</li>
                          <li><span className="font-semibold">Dynamic Routing:</span> Routers communicate using protocols like RIP, OSPF, or EIGRP to dynamically learn paths.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">💬 ICMP (Internet Control Message Protocol)</span>
                        <p>Used by network devices to send error messages and operational information (e.g., "destination unreachable" or "ping"). ICMP operates at Layer 3 and helps diagnose network issues.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔁 NAT (Network Address Translation)</span>
                        <p>NAT translates private IP addresses to a public IP and vice versa, enabling multiple devices on a LAN to access the internet using a single public IP. Types:</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Static NAT:</span> One-to-one mapping.</li>
                          <li><span className="font-semibold">Dynamic NAT:</span> Pool-based mapping.</li>
                          <li><span className="font-semibold">PAT (Port Address Translation):</span> Many-to-one mapping using port numbers.</li>
                        </ul>
                        <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2">In IPv6, NAT is largely unnecessary due to its vast address space, promoting true end-to-end communication.</div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🛣️ Layer 3 Switch</span>
                        <p>A Layer 3 switch combines the functionality of a switch and a router. It performs fast packet switching within VLANs and routing between VLANs without needing a dedicated router.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🏷️ VLAN (Virtual LAN) & Trunk Port</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">VLAN:</span> Logically divides a physical network into multiple broadcast domains.</li>
                          <li><span className="font-semibold">Trunk Port:</span> Carries multiple VLANs' traffic over a single physical link, typically using 802.1Q tagging.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🌲 STP (Spanning Tree Protocol)</span>
                        <p>Prevents loops in a switched network by creating a loop-free logical topology. Ensures only one active path exists between two network devices.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">📶 Routing Protocols: RIP vs. OSPF vs. EIGRP</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">RIP (Routing Information Protocol):</span> Distance-vector; slow convergence; max 15 hops.</li>
                          <li><span className="font-semibold">OSPF (Open Shortest Path First):</span> Link-state; faster convergence; supports large, hierarchical networks.</li>
                          <li><span className="font-semibold">EIGRP (Enhanced Interior Gateway Routing Protocol):</span> Cisco proprietary hybrid protocol; combines speed with flexibility.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🌐 BGP (Border Gateway Protocol)</span>
                        <p>Used for routing between autonomous systems (AS) on the internet. It ensures reliable inter-domain routing.<br/>Route selection is based on attributes like AS-path, local preference, MED, and BGP policies. In multi-homed networks, BGP balances traffic across multiple ISPs.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">✳️ MPLS (Multi-Protocol Label Switching)</span>
                        <p>A high-performance routing technique that forwards data based on labels rather than IP headers. Offers speed, traffic engineering, and QoS benefits. Often used in carrier-grade WANs.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">📦 VRF (Virtual Routing and Forwarding)</span>
                        <p>Allows multiple instances of a routing table to coexist on the same router. Enables overlapping IP addresses (like in multi-tenant environments) and isolates network traffic.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔍 Interview-Relevant Extras</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">TTL (Time To Live):</span> Limits packet lifetime to avoid loops.</li>
                          <li><span className="font-semibold">Loopback address (127.0.0.1):</span> Used for self-diagnostics.</li>
                          <li><span className="font-semibold">Subnetting at Layer 3:</span> Helps manage network traffic by logically dividing IP networks.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">✅ Summary</span>
                        <div className="overflow-x-auto">
                          <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                            <thead>
                              <tr className="bg-indigo-100 text-indigo-800">
                                <th className="px-3 py-2 font-semibold">Component</th>
                                <th className="px-3 py-2 font-semibold">Purpose/Function</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="px-3 py-2">IP Addressing</td>
                                <td className="px-3 py-2">Logical device identification</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Routing</td>
                                <td className="px-3 py-2">Path determination for packet delivery</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">ICMP</td>
                                <td className="px-3 py-2">Diagnostic and control messages</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">NAT/PAT</td>
                                <td className="px-3 py-2">Enables internet access from private networks</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">VLAN + Trunk Ports</td>
                                <td className="px-3 py-2">Network segmentation and traffic multiplexing</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Routing Protocols</td>
                                <td className="px-3 py-2">Dynamic route discovery and optimization</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Layer 3 Switch</td>
                                <td className="px-3 py-2">Routing + switching capabilities</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">BGP/MPLS/VRF</td>
                                <td className="px-3 py-2">Enterprise and ISP-level traffic engineering</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-slate-600 text-sm mt-2">The Network Layer is fundamental for scalable communication, and understanding its components is vital for networking interviews, especially for roles in system administration, cybersecurity, and cloud architecture.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Layer 4: Transport Layer' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">Layer 4: Transport Layer – Interview-Specific Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">What is the Transport Layer?</span>
                        <p>The Transport Layer (Layer 4) of the OSI model is responsible for end-to-end communication and reliable data transfer between hosts. It ensures that data is delivered error-free, in sequence, and with no duplication. This layer is critical for providing service differentiation (e.g., reliability, speed) and enables port-based multiplexing, allowing multiple applications to use the network simultaneously.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Key Protocols: TCP vs UDP</span>
                        <div className="mb-2 font-semibold text-indigo-700">TCP (Transmission Control Protocol)</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Connection-oriented protocol.</li>
                          <li>Ensures reliable data delivery using acknowledgments, retransmissions, and sequence numbers.</li>
                          <li>Uses flow control (via sliding window), congestion control (e.g., slow start), and error checking.</li>
                          <li>Examples: HTTP, HTTPS, FTP, SMTP, SSH.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">TCP 3-Way Handshake:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">SYN:</span> Client sends synchronization request to server.</li>
                          <li><span className="font-semibold">SYN-ACK:</span> Server acknowledges with SYN and ACK.</li>
                          <li><span className="font-semibold">ACK:</span> Client acknowledges and connection is established.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">UDP (User Datagram Protocol)</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Connectionless protocol.</li>
                          <li>Offers fast, low-overhead transmission with no guarantee of delivery or order.</li>
                          <li>Used where speed is preferred over reliability.</li>
                          <li>Examples: DNS, DHCP, VoIP, video streaming, online gaming.</li>
                        </ul>
                        <div className="overflow-x-auto mt-2">
                          <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-3 py-2 font-semibold">Protocol</th>
                                <th className="px-3 py-2 font-semibold">Reliability</th>
                                <th className="px-3 py-2 font-semibold">Order</th>
                                <th className="px-3 py-2 font-semibold">Speed</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="px-3 py-2">TCP</td>
                                <td className="px-3 py-2">Reliable</td>
                                <td className="px-3 py-2">Ordered</td>
                                <td className="px-3 py-2">Slower</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">UDP</td>
                                <td className="px-3 py-2">Unreliable</td>
                                <td className="px-3 py-2">Unordered</td>
                                <td className="px-3 py-2">Faster</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Port Numbers and Multiplexing</span>
                        <p>Each host uses port numbers to identify specific applications or services.</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Ports range from:</li>
                          <li>0–1023: Well-known (e.g., HTTP – 80, HTTPS – 443)</li>
                          <li>1024–49151: Registered</li>
                          <li>49152–65535: Dynamic/private</li>
                        </ul>
                        <p>The Transport Layer assigns port numbers to distinguish between different application sessions on the same host. This enables simultaneous communication with multiple services.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Port Forwarding</span>
                        <p>A NAT device (like a router) maps an external port on its IP address to an internal host and port.</p>
                        <p>Useful for exposing internal services (e.g., web servers) to the public internet.</p>
                        <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2">Example: Public IP:80 → Private IP:192.168.1.10:80</div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Quality of Service (QoS)</span>
                        <p>QoS provides traffic prioritization to ensure reliable transmission for critical applications (e.g., VoIP, video).</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Achieved using traffic shaping, queuing, and marking.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">QoS Marking:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Uses fields like DSCP (Differentiated Services Code Point) and CoS (Class of Service) in IP headers.</li>
                          <li>Determines how traffic is treated during transmission (e.g., low latency vs. best-effort).</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Layer 4 Devices</span>
                        <p>Traditionally, firewalls and load balancers operate at Layer 4.</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li>These devices make forwarding decisions based on IP address and port numbers (not application data).</li>
                          <li>Layer 4 Load Balancer distributes requests based on TCP/UDP ports and IPs, without inspecting the actual content.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">✅ Interview Add-On Concepts</span>
                        <div className="mb-2 font-semibold text-indigo-700">Segmentation and Reassembly:</div>
                        <p>The Transport Layer breaks large messages into smaller segments (TCP) or datagrams (UDP) for transmission and reassembles them at the destination.</p>
                        <div className="mb-2 font-semibold text-indigo-700">Error Detection:</div>
                        <p>TCP and UDP include checksums for detecting transmission errors.</p>
                        <div className="mb-2 font-semibold text-indigo-700">Flow Control (TCP only):</div>
                        <p>Prevents sender from overwhelming receiver (using window size).</p>
                        <div className="mb-2 font-semibold text-indigo-700">Congestion Control (TCP only):</div>
                        <p>Adjusts the sending rate based on network conditions.</p>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">🔚 Summary for Interview</span>
                        <p>The Transport Layer ensures reliable or fast delivery of data using TCP or UDP, enables multiplexing via port numbers, and supports performance optimization through QoS, flow/congestion control, and port forwarding. Knowledge of TCP/UDP, the 3-way handshake, and Layer 4 device behavior is essential for network design and troubleshooting.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Layer 5: Session Layer' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">🔒 Layer 5: Session Layer – Interview-Focused Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">What is the Session Layer?</span>
                        <p>The Session Layer (Layer 5) of the OSI model manages and controls the dialogue between two networked devices. It is responsible for establishing, maintaining, synchronizing, and terminating sessions — a session being a continuous exchange of information over a single communication path.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Core Responsibilities</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Session Establishment, Maintenance, and Termination:</span> Ensures that communication sessions are opened, maintained, and closed gracefully. Distinguishes between multiple ongoing sessions (e.g., downloading a file while video conferencing).</li>
                          <li><span className="font-semibold">Dialog Control:</span> Manages whether communication is half-duplex (one direction at a time) or full-duplex (simultaneous two-way communication).</li>
                          <li><span className="font-semibold">Synchronization:</span> Adds checkpoints or synchronization points in long data streams to allow resumption from known points if the connection drops.<br/>Example: During large file transfers, if a failure occurs at 70%, it can resume from that checkpoint instead of starting over.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔐 Security Integration: SSL/TLS and Encryption</span>
                        <p>While encryption itself is handled primarily at the Presentation Layer (Layer 6), session layer protocols like SSL/TLS negotiate secure session establishment.</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Authentication:</span> Verifying identity</li>
                          <li><span className="font-semibold">Confidentiality:</span> Data encryption</li>
                          <li><span className="font-semibold">Integrity:</span> Ensuring data hasn't been tampered with</li>
                        </ul>
                        <p>These protocols initiate a secure session before actual data transmission, especially in applications like HTTPS, email, or VoIP.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🧠 Interview-Relevant Concepts</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Session Tokens & State Management:</span> Common in web applications; servers track sessions using tokens or cookies.</li>
                          <li><span className="font-semibold">Protocol Examples:</span> NetBIOS, PPTP, and RPC (Remote Procedure Call).</li>
                          <li><span className="font-semibold">Stateless vs Stateful Sessions:</span> Session Layer enables stateful communication, crucial for tracking user activity across multiple requests in contrast to inherently stateless protocols like HTTP.</li>
                          <li><span className="font-semibold">Impact on Application Performance:</span> Proper session management prevents re-authentication and improves responsiveness, especially in APIs and distributed systems.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">✅ Summary</span>
                        <p>The Session Layer ensures organized, persistent, and optionally secure communication between devices or applications. It bridges the gap between the reliability of the transport layer and the specificity of the application layer, playing a vital role in synchronization, recovery, and dialog control — all of which are essential in designing resilient, interactive systems.</p>
                        <div className="text-slate-600 text-sm mt-2">📌 In interviews, demonstrate knowledge of where session control ends and transport or application responsibilities begin. Clarify how TLS fits across both session and presentation layers.</div>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Layer 6: Presentation Layer' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">Layer 6: Presentation Layer – Interview-Specific Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">What is the Presentation Layer?</span>
                        <p>The Presentation Layer (Layer 6) of the OSI model acts as the translator for the network. It ensures that the data sent from the application layer of one system is readable by the application layer of another, regardless of their differences in data representation.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Core Responsibilities</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Data Translation / Syntax Negotiation:</span> Converts data between different formats (e.g., ASCII ↔ EBCDIC, JSON ↔ XML, etc.). Ensures interoperability between systems with different data encoding schemes.</li>
                          <li><span className="font-semibold">Data Encryption & Decryption:</span> Provides confidentiality by encrypting data before it reaches the transport layer. Decrypts incoming encrypted data for the application layer. SSL/TLS protocols are implemented here to enable secure sessions for web traffic and email.</li>
                          <li><span className="font-semibold">Data Compression & Decompression:</span> Reduces the size of the data to optimize transmission efficiency and bandwidth utilization (e.g., image, audio, and video compression).</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔐 SSL/TLS: Security at the Presentation Layer</span>
                        <p>SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols that operate primarily at the presentation layer (though also linked with the session layer).</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Encryption:</span> Keeps transmitted data confidential.</li>
                          <li><span className="font-semibold">Authentication:</span> Verifies identity via certificates.</li>
                          <li><span className="font-semibold">Integrity:</span> Prevents tampering using message authentication codes (MACs).</li>
                        </ul>
                        <p>Widely used in HTTPS, SMTP (email), VoIP, and VPNs.<br/>Example: When you visit a website with HTTPS, TLS secures the communication before any application data is exchanged.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🧠 Interview-Relevant Points</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Where It Fits:</span> While not often implemented separately in modern networking stacks (e.g., TCP/IP), its functions are crucial and handled by application libraries (like OpenSSL).</li>
                          <li><span className="font-semibold">Not a True Layer in TCP/IP:</span> It's merged into the application layer in real-world models, but understanding its logical role is essential.</li>
                          <li><span className="font-semibold">Important for Secure APIs and Web Apps:</span> Presentation layer concerns are critical when working with JSON web tokens (JWT), Base64 encoding, or REST APIs where data format, encoding, and secure transfer are key.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">✅ Summary</span>
                        <p>The Presentation Layer is responsible for making data presentable—secure, compressed, and in the correct format. It ensures data consistency and security across heterogeneous systems and plays a pivotal role in modern web and application development, especially in secure communication using SSL/TLS.</p>
                        <div className="text-slate-600 text-sm mt-2">📌 In interviews, highlight how the presentation layer enables interoperability and security, and how protocols like TLS safeguard client-server communication.</div>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Layer 7: Application Layer' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">🌐 Layer 7: Application Layer – Interview-Specific Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">What is the Application Layer?</span>
                        <p>The Application Layer (Layer 7) is the topmost layer of the OSI model, directly interacting with end-user applications. It does not refer to the actual applications (like Chrome or Outlook), but to the protocols and services that support user-facing functionalities over the network.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Core Responsibilities</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">User Interface to Network Services:</span> Provides the interface for applications to communicate over the network. Examples: Browsers using HTTP/HTTPS, mail clients using SMTP, file transfer using FTP, etc.</li>
                          <li><span className="font-semibold">Protocol Support for Various Services:</span> DNS – Translates domain names to IP addresses. DHCP – Dynamically assigns IP addresses to hosts. HTTP/HTTPS – Web browsing protocols (with HTTPS providing security via TLS). FTP – Transfers files between systems. SMTP/IMAP/POP3 – Email delivery and retrieval. SNMP – Monitors and manages network devices.</li>
                          <li><span className="font-semibold">Resource Sharing & Remote Access:</span> Supports shared network resources like printers, files, or sessions.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🌍 Real-World Example: "What happens when you type google.com in a browser?"</span>
                        <ol className="list-decimal ml-6 mb-2">
                          <li>Browser invokes DNS (via Application Layer) to resolve google.com to an IP.</li>
                          <li>DNS query sent to DNS resolver, which contacts a DNS server.</li>
                          <li>IP address is returned → browser initiates HTTP/HTTPS request.</li>
                          <li>TCP connection (via transport layer) established.</li>
                          <li>Encrypted TLS handshake if HTTPS.</li>
                          <li>Google server responds with web page content → browser renders.</li>
                        </ol>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🛡️ Important Protocols & Concepts</span>
                        <div className="overflow-x-auto mt-2">
                          <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-3 py-2 font-semibold">Protocol</th>
                                <th className="px-3 py-2 font-semibold">Purpose</th>
                                <th className="px-3 py-2 font-semibold">Notes</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="px-3 py-2">DNS (Domain Name System)</td>
                                <td className="px-3 py-2">Resolves domain names to IPs</td>
                                <td className="px-3 py-2">Can be vulnerable to DNS spoofing if not secured</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">DNS Resolver</td>
                                <td className="px-3 py-2">First step in DNS resolution</td>
                                <td className="px-3 py-2">Queries DNS servers recursively</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">DNSSEC</td>
                                <td className="px-3 py-2">Adds cryptographic validation to DNS</td>
                                <td className="px-3 py-2">Protects against spoofing</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">DHCP (Dynamic Host Configuration Protocol)</td>
                                <td className="px-3 py-2">Auto-assigns IPs to devices</td>
                                <td className="px-3 py-2">Uses DORA: Discover → Offer → Request → Acknowledge</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">HTTP/HTTPS</td>
                                <td className="px-3 py-2">Hypertext Transfer Protocols</td>
                                <td className="px-3 py-2">HTTPS uses TLS for encryption, data integrity, and authentication</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">FTP</td>
                                <td className="px-3 py-2">File Transfer Protocol</td>
                                <td className="px-3 py-2">Can use credentials, typically plaintext unless FTPS/SFTP</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">SMTP</td>
                                <td className="px-3 py-2">Simple Mail Transfer Protocol</td>
                                <td className="px-3 py-2">For sending emails</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">SNMP / SNMPv3</td>
                                <td className="px-3 py-2">For monitoring/managing network devices</td>
                                <td className="px-3 py-2">v3 adds authentication & encryption</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Proxy Server</td>
                                <td className="px-3 py-2">Intermediate server between client and destination</td>
                                <td className="px-3 py-2">Used for caching, filtering, privacy, and load balancing</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🧠 Interview-Relevant Insights</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Application layer protocols define how applications communicate over the network, but do not perform the application's logic themselves.</li>
                          <li>Understanding the flow of client-server communication (e.g., DNS resolution → HTTP request) is critical for system design interviews.</li>
                          <li>Be ready to differentiate between similar protocols (e.g., HTTP vs HTTPS, FTP vs SFTP, SNMP vs SNMPv3).</li>
                          <li>Expect questions on security aspects, such as DNS spoofing, TLS handshake, man-in-the-middle attacks, or how proxy servers affect network routing and performance.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">✅ Summary</span>
                        <p>The Application Layer enables direct user interaction with network services by providing protocols for communication, file transfer, email, name resolution, and device monitoring. It plays a central role in modern web, cloud, and enterprise applications. In interviews, emphasize how application layer protocols orchestrate real-world internet workflows, and highlight your understanding of security, architecture, and practical implementations.</p>
                        <div className="text-slate-600 text-sm mt-2">📌 Pro Tip: When asked about protocols or processes like DNS or DHCP, always explain both their functionality and underlying workflow (e.g., DORA process in DHCP).</div>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'TCP/IP Model and Protocol Stack' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">TCP/IP Model and Protocol Stack — Interview-Specific Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">What is the TCP/IP Model?</span>
                        <p>The TCP/IP model (Transmission Control Protocol/Internet Protocol) is a concise, pragmatic, and widely adopted framework for understanding and designing network communication systems. It forms the foundational architecture for the Internet and modern computer networks, focusing on interoperability, scalability, and protocol standardization. Unlike the OSI model's 7-layer structure, the TCP/IP model uses a 4-layer abstraction, each responsible for specific functions in end-to-end communication.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">✅ The Four Layers of the TCP/IP Model</span>
                        <div className="overflow-x-auto mt-2">
                          <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-3 py-2 font-semibold">Layer</th>
                                <th className="px-3 py-2 font-semibold">Equivalent OSI Layers</th>
                                <th className="px-3 py-2 font-semibold">Key Protocols</th>
                                <th className="px-3 py-2 font-semibold">Responsibilities</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="px-3 py-2">4. Application Layer</td>
                                <td className="px-3 py-2">OSI Layers 5, 6, 7</td>
                                <td className="px-3 py-2">HTTP, HTTPS, FTP, SMTP, DNS, SNMP</td>
                                <td className="px-3 py-2">Interface for user applications, data formatting, encryption, and session handling</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">3. Transport Layer</td>
                                <td className="px-3 py-2">OSI Layer 4</td>
                                <td className="px-3 py-2">TCP, UDP</td>
                                <td className="px-3 py-2">Reliable (TCP) or fast (UDP) delivery, flow control, segmentation, multiplexing</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">2. Internet Layer</td>
                                <td className="px-3 py-2">OSI Layer 3</td>
                                <td className="px-3 py-2">IP (IPv4/IPv6), ICMP, ARP</td>
                                <td className="px-3 py-2">Logical addressing, packet routing across networks</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">1. Network Access Layer</td>
                                <td className="px-3 py-2">OSI Layers 1 & 2</td>
                                <td className="px-3 py-2">Ethernet, Wi-Fi, ARP</td>
                                <td className="px-3 py-2">Physical transmission, MAC addressing, framing</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">💡 OSI vs TCP/IP Model – Key Differences</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Layers:</span> OSI has 7 layers; TCP/IP has 4 layers.</li>
                          <li><span className="font-semibold">Adoption:</span> TCP/IP is the de facto model for the internet.</li>
                          <li><span className="font-semibold">Design:</span> TCP/IP was protocol-driven; OSI is conceptually driven.</li>
                          <li><span className="font-semibold">Implementation:</span> OSI is rarely implemented fully, while TCP/IP protocols (like IP, TCP, UDP) are universally deployed.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">⚙️ Essential Protocols in the TCP/IP Stack</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">1. ARP (Address Resolution Protocol):</span> Maps IP addresses to MAC addresses. Operates at the boundary of Internet and Network Access layers. Maintains an ARP cache to store resolved addresses.</li>
                          <li><span className="font-semibold">2. ICMP (Internet Control Message Protocol):</span> Used for error reporting and diagnostics, e.g., ping and traceroute. Not used to transmit data, but supports IP reliability.</li>
                          <li><span className="font-semibold">3. DHCP (Dynamic Host Configuration Protocol):</span> Automatically assigns IP address, subnet mask, gateway, and DNS. Follows a 4-step process: Discover → Offer → Request → Acknowledge (DORA). Reduces manual IP configuration and centralizes IP management.</li>
                          <li><span className="font-semibold">4. FTP (File Transfer Protocol):</span> Application layer protocol for file transfer. Uses TCP for reliability. FTP vs SFTP: FTP is unencrypted; SFTP is secure.</li>
                          <li><span className="font-semibold">5. SMTP (Simple Mail Transfer Protocol):</span> Used to send emails (not receive). Works with protocols like POP3/IMAP for mailbox retrieval. Relies on TCP, commonly over port 25 or 587 (with STARTTLS).</li>
                          <li><span className="font-semibold">6. SNMP (Simple Network Management Protocol):</span> Enables monitoring and managing network devices (routers, switches). SNMPv3 includes authentication and encryption (unlike earlier versions). Agents on devices communicate with a central NMS (Network Management System).</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🚀 Interview-Relevant Insights</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">TCP vs UDP:</span> TCP offers reliability and ordering, used in HTTP, FTP. UDP is faster, connectionless, used in DNS, VoIP.</li>
                          <li><span className="font-semibold">Encapsulation:</span> TCP/IP stack uses encapsulation to wrap data with appropriate headers at each layer before transmission.</li>
                          <li><span className="font-semibold">Multiplexing:</span> Transport layer uses port numbers to support multiple connections on the same IP.</li>
                          <li><span className="font-semibold">Stateless vs Stateful:</span> Many TCP/IP protocols (e.g., HTTP) are stateless; TCP provides stateful session tracking.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">🧠 Common Interview Questions Context</span>
                        <p>Understanding the TCP/IP stack is essential for diagnosing real-world networking issues, designing scalable systems, and securing data transmissions. From low-level packet flow (via IP, ICMP, ARP) to application-level communication (HTTP, SMTP), a deep grasp of the model equips candidates to handle questions across SRE, backend, network engineering, and security roles.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Wireless & Modern Networking Technologies' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">📡 Wireless & Modern Networking Technologies — Interview-Specific Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">Wireless Standards (IEEE 802.11 Family)</span>
                        <p>IEEE 802.11 is the set of standards that define Wi-Fi. Two commonly compared versions are:</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">802.11g (2003):</span> Operates at 2.4 GHz, max speed ~54 Mbps.</li>
                          <li><span className="font-semibold">802.11n (2009):</span> Supports 2.4 GHz and 5 GHz (dual-band), uses MIMO (Multiple Input Multiple Output) technology, with theoretical speeds up to 600 Mbps. It provides greater range, reduced interference, and better throughput.</li>
                        </ul>
                        <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2">📌 Interview Tip: Knowing how bandwidth, frequency, and interference impact network performance is crucial in system optimization questions.</div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔒 Wi-Fi Security (WPA2 vs WPA3)</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">WPA2 (Wi-Fi Protected Access 2):</span> Uses AES encryption; secure but vulnerable to brute-force dictionary attacks on pre-shared keys.</li>
                          <li><span className="font-semibold">WPA3:</span> Introduced in 2018, offers individualized encryption and forward secrecy, and is resistant to offline password guessing (through SAE – Simultaneous Authentication of Equals).</li>
                        </ul>
                        <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2">📌 Interview Tip: Understanding differences between WPA2 and WPA3 is key when asked about secure Wi-Fi implementation or vulnerabilities in wireless networks.</div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔐 Securing Wireless Networks</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Enabling WPA3/WPA2 with strong passwords.</li>
                          <li>Disabling SSID broadcasting (for obscurity).</li>
                          <li>MAC address filtering (limited control).</li>
                          <li>Disabling WPS (Wi-Fi Protected Setup).</li>
                          <li>Network segmentation using VLANs or guest networks.</li>
                          <li>Using firewalls and regularly updating firmware.</li>
                        </ul>
                        <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2">📌 Interview Tip: Security design questions often include how to defend against threats like evil twin attacks, rogue APs, and man-in-the-middle attacks.</div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🌐 Mesh Networks vs Traditional Wi-Fi</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Traditional Wi-Fi:</span> Single router acts as central hub. Signal weakens with distance and obstructions.</li>
                          <li><span className="font-semibold">Mesh Network:</span> Uses multiple nodes (access points) that dynamically route traffic. Self-healing and scalable.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">Advantages of Mesh:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Seamless roaming.</li>
                          <li>Better coverage.</li>
                          <li>Load balancing across nodes.</li>
                          <li>High fault tolerance.</li>
                        </ul>
                        <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2">📌 Interview Tip: Companies using IoT or campus-wide connectivity often prefer mesh networks. Be ready to compare mesh vs extenders or explain routing mechanisms within mesh topology.</div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🧭 Addressing Methods: Unicast, Multicast, Anycast, Broadcast</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Unicast:</span> One-to-one communication (e.g., sending an email).</li>
                          <li><span className="font-semibold">Multicast:</span> One-to-many (selective) communication (e.g., streaming to multiple devices using IGMP).</li>
                          <li><span className="font-semibold">Broadcast:</span> One-to-all on a subnet (e.g., ARP requests in IPv4).</li>
                          <li><span className="font-semibold">Anycast:</span> One-to-one-of-many — data is sent to the nearest (lowest-latency) node in a group (used in DNS and CDNs).</li>
                        </ul>
                        <div className="mt-2 text-sm bg-blue-50 border-l-4 border-blue-300 rounded px-3 py-2">📌 Interview Tip: These concepts are often part of cloud, CDN, and IPv6 system design questions.</div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔧 Modern Networking Trends (Extra Interview-Relevant Points)</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Wi-Fi 6 (802.11ax):</span> Higher throughput, better performance in dense environments, improved battery life (Target Wake Time).</li>
                          <li><span className="font-semibold">SD-WAN (Software-Defined WAN):</span> Decouples network control from hardware; used in enterprise WAN optimization.</li>
                          <li><span className="font-semibold">IoT Networking:</span> Lightweight protocols like MQTT and CoAP, often over Wi-Fi, Zigbee, or LTE.</li>
                          <li><span className="font-semibold">5G Networks:</span> Ultra-low latency (&lt;1ms), high bandwidth, and network slicing support.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">✅ Summary for Interviews</span>
                        <div className="overflow-x-auto">
                          <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                            <thead>
                              <tr className="bg-indigo-100 text-indigo-800">
                                <th className="px-3 py-2 font-semibold">Concept</th>
                                <th className="px-3 py-2 font-semibold">Key Points</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="px-3 py-2">Wireless Standards</td>
                                <td className="px-3 py-2">802.11n &gt; 802.11g (MIMO, dual-band, speed)</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">WPA2 vs WPA3</td>
                                <td className="px-3 py-2">WPA3 = improved security, SAE, forward secrecy</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Mesh Network</td>
                                <td className="px-3 py-2">Multi-node, self-healing, better coverage than routers</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Securing Wi-Fi</td>
                                <td className="px-3 py-2">Strong encryption, disable WPS, update firmware</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Addressing</td>
                                <td className="px-3 py-2">Unicast (1:1), Broadcast (1:all), Multicast (1:group), Anycast (1:nearest)</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">Modern Additions</td>
                                <td className="px-3 py-2">Wi-Fi 6, SD-WAN, IoT protocols, 5G</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Virtualization and Secure Networking' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">Virtualization and Secure Networking — Interview-Specific Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">Virtualization in Networking</span>
                        <p>Virtualization refers to the creation of virtual instances of computing resources such as servers, desktops, storage devices, networks, and operating systems. Network virtualization enables multiple isolated virtual networks to run on a single physical infrastructure using software-defined networking (SDN) principles.</p>
                        <div className="mb-2 font-semibold text-indigo-700">Benefits:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Reduces hardware dependency</li>
                          <li>Supports scalability and flexibility</li>
                          <li>Enables network segmentation and micro-segmentation for enhanced security</li>
                          <li>Facilitates dynamic provisioning and load balancing</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">Examples:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Virtual LAN (VLAN):</span> Logical segmentation of LANs within the same physical switch.</li>
                          <li><span className="font-semibold">Virtual Private Network (VPN):</span> Creates a secure tunnel over a public network.</li>
                          <li><span className="font-semibold">Hypervisors:</span> Type 1 (bare-metal, e.g., VMware ESXi), Type 2 (hosted, e.g., VirtualBox)</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">Secure Networking Technologies</span>
                        <div className="mb-2 font-semibold text-indigo-700">1. VPN (Virtual Private Network)</div>
                        <p>A VPN establishes a secure, encrypted tunnel between the client and server, enabling secure access over untrusted networks like the internet.</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Remote Access VPN:</span> Used by individual users to securely connect to a private network from remote locations.</li>
                          <li><span className="font-semibold">Site-to-Site VPN:</span> Connects two or more networks, typically between branch offices.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">2. IPsec vs SSL VPN</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">IPsec VPN:</span> Works at the network layer, encrypting IP packets. Requires configuration on both client and network devices.</li>
                          <li><span className="font-semibold">SSL VPN:</span> Operates at the application layer using SSL/TLS encryption. Accessed via browser and easier to deploy for remote users.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">Security Zones and Devices</span>
                        <div className="mb-2 font-semibold text-indigo-700">DMZ (Demilitarized Zone)</div>
                        <p>A DMZ is a physical or logical subnetwork that hosts external-facing services (e.g., web, email, DNS servers) isolated from the internal network. It limits the damage in case of external breaches.</p>
                        <div className="mb-2 font-semibold text-indigo-700">Stateful vs Stateless Firewall</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Stateful Firewall:</span> Tracks active connections and allows return traffic. Offers higher security by maintaining session state.</li>
                          <li><span className="font-semibold">Stateless Firewall:</span> Inspects packets independently, without tracking state. Faster but less secure.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">ACL (Access Control List)</div>
                        <p>ACLs define rules that permit or deny traffic based on IP addresses, protocols, or ports. Applied on routers, firewalls, and switches for granular traffic filtering.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">Encryption and Access Control</span>
                        <div className="mb-2 font-semibold text-indigo-700">Network Encryption</div>
                        <p>Network encryption secures data in transit using algorithms (e.g., AES, RSA). It prevents eavesdropping and tampering. Implemented in protocols like TLS (for HTTPS), IPsec, and WPA3.</p>
                        <div className="mb-2 font-semibold text-indigo-700">NAT Traversal</div>
                        <p>NAT traversal is a method to maintain communication between devices behind NAT (Network Address Translation). VPNs and VoIP rely on it to ensure seamless connection establishment.</p>
                        <div className="mb-2 font-semibold text-indigo-700">DNSSEC (DNS Security Extensions)</div>
                        <p>DNSSEC protects DNS responses from tampering by digitally signing records using public key cryptography, preventing DNS spoofing and cache poisoning attacks.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">Authentication and Authorization</span>
                        <div className="mb-2 font-semibold text-indigo-700">NPS Server (RADIUS)</div>
                        <p>Network Policy Server (NPS) implements the RADIUS protocol to authenticate, authorize, and account (AAA) users accessing network resources. Commonly used in enterprise Wi-Fi and VPN authentication.</p>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">Interview-Specific Key Insights</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Always emphasize the layer in which a protocol or technology operates (e.g., IPsec = Layer 3, SSL = Layer 5-6).</li>
                          <li>Discuss use cases such as secure remote work, hybrid cloud access, and IoT segmentation.</li>
                          <li>Understand how firewalls, VPNs, ACLs, and encryption work together to enforce defense-in-depth.</li>
                          <li>Be ready to explain how virtual networks and DMZs enhance security in multi-tenant and cloud environments.</li>
                        </ul>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Advanced Routing and Traffic Management' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">🔹 Advanced Routing and Traffic Management – Interview-Oriented Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">IP Routing Overview</span>
                        <p>IP Routing is the process of determining the best path for forwarding IP packets from source to destination across interconnected networks. Routers use routing tables and algorithms to make these decisions. Routing can be static (manually configured) or dynamic (automatically updated using routing protocols).</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔸 Dynamic Routing Protocols</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">RIP (Routing Information Protocol):</span> Distance-vector, hop count metric (max 15 hops), periodic updates, slow convergence, small networks.</li>
                          <li><span className="font-semibold">OSPF (Open Shortest Path First):</span> Link-state, Dijkstra's algorithm, hierarchical areas, fast convergence, supports VLSM/CIDR, scalable.</li>
                          <li><span className="font-semibold">EIGRP (Enhanced Interior Gateway Routing Protocol):</span> Hybrid, Cisco proprietary, fast convergence, unequal-cost load balancing.</li>
                          <li><span className="font-semibold">BGP (Border Gateway Protocol):</span> Exterior gateway, path vector, AS-PATH for loop prevention, internet routing, policy-based.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔸 Modern Routing Solutions</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">SD-WAN (Software-Defined WAN):</span> Centralized control, multiple transport links, application-aware routing, performance, cost savings.</li>
                          <li><span className="font-semibold">HSRP (Hot Standby Router Protocol):</span> Cisco redundancy, active/standby routers, virtual IP, failover with minimal downtime.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔸 Tunneling and Aggregation</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">GRE Tunnel (Generic Routing Encapsulation):</span> Encapsulates Layer 3 protocols, site-to-site VPNs, non-IP transport, pair with IPsec for security.</li>
                          <li><span className="font-semibold">Link Aggregation (LAG):</span> Combines links for throughput/redundancy, uses LACP, balances traffic, provides failover.</li>
                          <li><span className="font-semibold">Port Aggregation:</span> Bundles Ethernet ports on switches for bandwidth.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔸 Network Design & Efficiency</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Network Convergence:</span> All routers have consistent routing tables; faster convergence = less downtime.</li>
                          <li><span className="font-semibold">VTP (VLAN Trunking Protocol):</span> Cisco protocol for VLAN management, reduces manual errors, has Server/Client/Transparent modes.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔹 Interview Relevance Add-ons</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Emphasize BGP's loop prevention using AS_PATH and split horizon in RIP.</li>
                          <li>Know OSPF's hierarchy (Area 0) and LSAs for advanced topology advertisements.</li>
                          <li>Be aware of SD-WAN advantages over traditional MPLS: cost-effective, centralized, and cloud-optimized.</li>
                          <li>Understand GRE's role in tunneling non-IP traffic or multicast over a unicast network.</li>
                          <li>Highlight use-cases: E.g., HSRP in data centers, link aggregation for bandwidth-heavy apps.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">Summary</span>
                        <p>Advanced routing ensures scalability, fault tolerance, and optimized traffic flow across networks. Mastering dynamic protocols, tunneling, convergence, and software-defined technologies like SD-WAN is critical for designing resilient, modern enterprise networks—key knowledge for both interviews and real-world implementations.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Network Monitoring & Troubleshooting' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg"> Network Monitoring, Analysis & Troubleshooting – Interview-Specific Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">Overview</span>
                        <p>This area focuses on techniques and tools used to monitor network performance, detect anomalies, and troubleshoot connectivity or performance issues. It's essential for ensuring uptime, optimizing performance, and securing networks from malicious activities.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔧 Core Concepts</span>
                        <div className="mb-2 font-semibold text-indigo-700">✅ Network Monitoring</div>
                        <p>Network monitoring involves continuously observing the network to detect performance bottlenecks, failures, or breaches. It includes:</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Traffic analysis using tools like Wireshark, NetFlow, or SNMP.</li>
                          <li>Health checks on devices (CPU, memory, interface errors).</li>
                          <li>Logging and alerts for threshold breaches, unusual spikes, or unauthorized access.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">✅ Troubleshooting Techniques</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">Ping Command:</span> Used to test connectivity to a host by sending ICMP echo requests. Measures latency, packet loss, and reachability. Useful for verifying DNS resolution, routing, and firewall issues.</li>
                          <li><span className="font-semibold">Traceroute (or tracert):</span> Diagnoses path taken by packets across routers. Identifies latency or packet loss at specific hops.</li>
                          <li><span className="font-semibold">Default Gateway:</span> Acts as the exit node for packets leaving the local network. Misconfigured gateways cause host isolation from external networks.</li>
                          <li><span className="font-semibold">Latency Troubleshooting:</span> Investigate device overload, faulty cables, DNS delays, and routing loops. Use ping, traceroute, iperf, and QoS tools.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🧰 Analysis Tools</span>
                        <div className="mb-2 font-semibold text-indigo-700">🔍 Wireshark</div>
                        <p>A powerful packet-sniffing tool. Captures live traffic and displays detailed packet-level information.</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Inspect headers for malformed packets.</li>
                          <li>Detect retransmissions or TCP handshake failures.</li>
                          <li>Filter traffic by protocol, port, or IP for targeted debugging.</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">🛑 Broadcast Storm</div>
                        <p>Caused by excessive Layer 2 broadcast traffic. Often triggered by loops in topology or misconfigured switches. Can paralyze the network; Spanning Tree Protocol (STP) is used to prevent it.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🧠 Key Command Line Tools</span>
                        <div className="overflow-x-auto mt-2">
                          <table className="min-w-[350px] w-full text-sm border border-slate-200 rounded-xl mb-2">
                            <thead>
                              <tr className="bg-indigo-50 text-indigo-700">
                                <th className="px-3 py-2 font-semibold">Command</th>
                                <th className="px-3 py-2 font-semibold">OS</th>
                                <th className="px-3 py-2 font-semibold">Purpose</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="px-3 py-2">ipconfig</td>
                                <td className="px-3 py-2">Windows</td>
                                <td className="px-3 py-2">Displays network config (IP, DNS, GW)</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">ifconfig</td>
                                <td className="px-3 py-2">Linux/macOS</td>
                                <td className="px-3 py-2">Shows and configures interfaces</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">netstat</td>
                                <td className="px-3 py-2">All</td>
                                <td className="px-3 py-2">Displays active connections & ports</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">nslookup</td>
                                <td className="px-3 py-2">All</td>
                                <td className="px-3 py-2">DNS query diagnostics</td>
                              </tr>
                              <tr className="border-t">
                                <td className="px-3 py-2">dig</td>
                                <td className="px-3 py-2">Linux/macOS</td>
                                <td className="px-3 py-2">Advanced DNS lookup tool</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🛡️ Security-Relevant Monitoring</span>
                        <div className="mb-2 font-semibold text-indigo-700">🚫 DDoS (Distributed Denial of Service)</div>
                        <p>Overwhelms a system or network with excessive traffic from multiple sources.</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Sudden spikes in inbound traffic.</li>
                          <li>Repeated SYN requests without completing handshakes.</li>
                          <li>Use of rate limiting, firewalls, and DDoS mitigation services to protect.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">📈 Interview-Relevant Additions</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">NetFlow/sFlow:</span> Used for traffic pattern analysis and capacity planning.</li>
                          <li><span className="font-semibold">Network TAPs and SPAN ports:</span> Used to mirror traffic for passive monitoring.</li>
                          <li><span className="font-semibold">SNMP Traps:</span> Proactively alert admins on specific events like interface down or high CPU load.</li>
                          <li><span className="font-semibold">Syslog Servers:</span> Centralize logs from all network devices for correlation and auditing.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">🧩 Final Insight for Interviews</span>
                        <p>Expect scenario-based questions like:</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li>"A server is unreachable, how would you diagnose it?"</li>
                          <li>"You're seeing high latency between two locations, what steps do you take?"</li>
                          <li>"How do you differentiate between network and application layer issues?"</li>
                        </ul>
                        <p>Frame your responses with layered diagnosis, tool usage, and interpretation of data (e.g., ping results, trace paths, packet captures). Emphasize a structured, logical troubleshooting approach.</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Cloud and Enterprise Networking' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg"> Cloud and Enterprise Networking – Interview-Specific Theory</h2>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">Overview</span>
                        <p>Cloud and Enterprise Networking refer to the architecture, technologies, and practices used to interconnect distributed IT resources across on-premise data centers, public/private clouds, and remote sites. The shift from hardware-centric to software-defined and cloud-integrated models has reshaped how enterprises build, scale, and secure networks.</p>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">📦 Software Defined Networking (SDN)</span>
                        <p>SDN is an architecture that separates the control plane from the data plane, centralizing network intelligence via a software-based controller.</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li>The SDN Controller dictates how switches and routers should forward packets.</li>
                          <li>Enables programmatic control, automation, centralized policy enforcement, and dynamic resource provisioning.</li>
                          <li>Ideal for cloud-native, data center, and multi-tenant environments.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🌐 SD-WAN vs Traditional WAN</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li>SD-WAN (Software Defined Wide Area Network) modernizes WANs by:</li>
                          <li>Using application-aware routing across multiple transport types (MPLS, LTE, broadband).</li>
                          <li>Providing centralized management and real-time path selection.</li>
                          <li>Reducing cost by replacing expensive MPLS with commodity internet.</li>
                          <li>Offering enhanced performance, security, and resiliency—especially for cloud/SaaS applications.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🧱 Multi-Cloud Environment</span>
                        <p>A multi-cloud environment refers to the use of multiple cloud service providers (e.g., AWS, Azure, GCP) for different workloads or redundancy.</p>
                        <div className="mb-2 font-semibold text-indigo-700">Benefits:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Avoids vendor lock-in</li>
                          <li>Enables workload portability and fault tolerance</li>
                          <li>Demands robust networking, interconnectivity, and centralized security policies</li>
                        </ul>
                        <div className="mb-2 font-semibold text-indigo-700">Networking Implications:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Requires cloud interconnects (e.g., AWS Direct Connect, Azure ExpressRoute)</li>
                          <li>Involves hybrid DNS, multi-region VPC/VNet peering, and latency optimization</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🔐 Securing Enterprise Networks in the Cloud</span>
                        <p>Cloud environments shift the security perimeter from physical devices to identity and access control.</p>
                        <div className="mb-2 font-semibold text-indigo-700">Best Practices:</div>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Zero Trust Architecture: Never trust, always verify—even inside the network.</li>
                          <li>Micro-segmentation: Isolate workloads using firewalls and security groups.</li>
                          <li>IAM Policies & Roles: Principle of least privilege for resource access.</li>
                          <li>Cloud-native tools: AWS WAF, Azure NSGs, Security Hub, GuardDuty, etc.</li>
                          <li>Encryption: Data in transit (TLS/IPSec) and at rest (KMS-integrated keys).</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🌍 IPv6 Implementation Challenges</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Dual Stack Complexity: Running IPv4 and IPv6 together increases overhead.</li>
                          <li>Legacy Systems: Older software/hardware may lack IPv6 support.</li>
                          <li>Security Misconfigurations: Firewall rules and ACLs need redefinition for IPv6.</li>
                          <li>Staff Skill Gaps: Teams may lack deep IPv6 operational experience.</li>
                          <li>Testing & Visibility: Tooling needs IPv6 compatibility for proper diagnostics.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-semibold text-indigo-600 mb-1">🧠 Interview-Relevant Additional Concepts</span>
                        <ul className="list-disc ml-6 mb-2">
                          <li><span className="font-semibold">VPC (Virtual Private Cloud):</span> A logically isolated network in the cloud; includes subnets, route tables, internet gateways, NATs, and security groups.</li>
                          <li><span className="font-semibold">Transit Gateway (AWS) / Virtual WAN (Azure):</span> Centralized hub for scalable network connectivity across regions/accounts.</li>
                          <li><span className="font-semibold">Cloud Load Balancers:</span> Distribute traffic to backend services across zones or regions, increasing reliability and performance.</li>
                          <li><span className="font-semibold">Cloud VPNs & Direct Connects:</span> Secure links between on-prem and cloud; VPN for cost-effectiveness, Direct Connect for performance.</li>
                          <li><span className="font-semibold">CASB (Cloud Access Security Broker):</span> Security enforcement point between users and cloud services for visibility and policy control.</li>
                        </ul>
                      </div>
                      <div className="border border-indigo-200 rounded-xl bg-indigo-50/60 p-4 shadow-md">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">🧩 Final Insight for Interviews</span>
                        <p>Expect questions framed around designing scalable, secure, and resilient cloud-connected networks. Key response strategies:</p>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Demonstrate deep understanding of abstraction (e.g., SDN/SD-WAN).</li>
                          <li>Address modern security paradigms like Zero Trust and least privilege.</li>
                          <li>Show knowledge of cloud provider-specific features and multi-cloud networking strategies.</li>
                          <li>Discuss real-world limitations, such as legacy compatibility and operational risks in transitions.</li>
                        </ul>
                        <p>In short, combine conceptual clarity with practical design thinking—the hallmark of top-tier cloud networking interviews</p>
                      </div>
                    </div>
                  ) 
                  
                  : topic === 'Relevant Interview Questions' ? (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">📝 Relevant Interview Questions</h2>
                      </div>
                      {/* Chapter 1 */}
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">Chapter 1: Introduction to Networking</span>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>What is a computer network?</li>
                          <li>How are network types classified?</li>
                          <li>What are the different types of networks? (LAN, WAN, MAN, PAN)</li>
                          <li>Explain LAN (Local Area Network)</li>
                          <li>What is the difference between LAN and WAN?</li>
                          <li>What are nodes and links?</li>
                          <li>What is network topology?</li>
                          <li>Define different types of network topology</li>
                          <li>What is the difference between a switch and a hub?</li>
                          <li>Compare the hub vs switch</li>
                          <li>What is the purpose of a hub?</li>
                          <li>What is a switch in networking?</li>
                          <li>What is the role of a router in a network?</li>
                          <li>What is a gateway in networking?</li>
                          <li>What is the difference between a router and a gateway?</li>
                          <li>What is a Layer 2 switch vs. Layer 3 switch?</li>
                        </ul>
                      </div>
                      {/* Chapter 2 */}
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">Chapter 2: Network Devices and Components</span>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>What is a network adapter?</li>
                          <li>What is the function of a modem?</li>
                          <li>What is a firewall?</li>
                          <li>What is the function of a firewall in networking?</li>
                          <li>What is a proxy server and how does it work?</li>
                          <li>What is a load balancer and how does it improve network performance?</li>
                          <li>What is an IDS/IPS (Intrusion Detection/Prevention System)?</li>
                          <li>What is a reverse proxy, and how does it differ from a forward proxy?</li>
                        </ul>
                      </div>
                      {/* Chapter 3 */}
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">Chapter 3: IP Addressing and Subnetting</span>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>What is an IP address?</li>
                          <li>What is an IPv4 address? What are the different classes of IPv4?</li>
                          <li>What is the difference between IPv4 and IPv6?</li>
                          <li>What are private and public IP addresses?</li>
                          <li>What is the difference between a public and private IP address?</li>
                          <li>What are Private and Special IP addresses?</li>
                          <li>What is CIDR (Classless Inter-Domain Routing)?</li>
                          <li>What is a subnet?</li>
                          <li>What is a subnet mask?</li>
                          <li>How does subnetting work, and why is it important?</li>
                          <li>What is a default gateway?</li>
                          <li>What are the three basic types of IP addresses (Class A, B, C)?</li>
                          <li>What is the difference between a static and dynamic IP address?</li>
                        </ul>
                      </div>
                      {/* Chapter 4: OSI Model – Layer by Layer */}
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">Chapter 4: OSI Model – Layer by Layer</span>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>What is the OSI model? Overview of all 7 layers.</li>
                          <li>Describe the OSI Reference Model</li>
                          <li>Define the 7 different layers of the OSI Model</li>
                        </ul>
                        <span className="block text-base font-semibold text-indigo-600 mt-4 mb-1">🔸 Physical Layer</span>
                        <ul className="list-disc ml-8 space-y-1">
                          <li>What is a LAN cable?</li>
                          <li>What are the different types of cables used in networking?</li>
                          <li>What are the advantages of fiber optic over copper?</li>
                          <li>What is bandwidth?</li>
                          <li>What is latency?</li>
                        </ul>
                        <span className="block text-base font-semibold text-indigo-600 mt-4 mb-1">🔸 Data Link Layer</span>
                        <ul className="list-disc ml-8 space-y-1">
                          <li>What is a MAC address?</li>
                          <li>What is the relation between MAC and NIC?</li>
                          <li>Difference between MAC and IP addresses</li>
                          <li>What is ARP? What is the ARP cache?</li>
                          <li>What is the role of a switch?</li>
                        </ul>
                        <span className="block text-base font-semibold text-indigo-600 mt-4 mb-1">🔸 Network Layer</span>
                        <ul className="list-disc ml-8 space-y-1">
                          <li>What is IP routing and how does it work?</li>
                          <li>What is the purpose of ICMP?</li>
                          <li>What is a router's function?</li>
                          <li>What is NAT? How does NAT work?</li>
                          <li>What is the purpose of NAT in IPv6?</li>
                          <li>What is the role of a Layer 3 switch?</li>
                          <li>What is the difference between static and dynamic routing table?</li>
                          <li>What is a VLAN? What is a trunk port?</li>
                          <li>What is STP (Spanning Tree Protocol)? What is its purpose?</li>
                          <li>What is the difference between RIP, OSPF, and EIGRP?</li>
                          <li>What is BGP? What is BGP route selection in multi-homed networks?</li>
                          <li>What is MPLS?</li>
                          <li>What is VRF (Virtual Routing and Forwarding)?</li>
                        </ul>
                        <span className="block text-base font-semibold text-indigo-600 mt-4 mb-1">🔸 Transport Layer</span>
                        <ul className="list-disc ml-8 space-y-1">
                          <li>What is TCP and UDP?</li>
                          <li>Compare TCP and UDP</li>
                          <li>Explain the TCP 3-way handshake</li>
                          <li>What is QoS (Quality of Service)? What is QoS marking?</li>
                          <li>What is port forwarding?</li>
                          <li>What is the role of port numbers?</li>
                          <li>What is a Layer 4 device?</li>
                        </ul>
                        <span className="block text-base font-semibold text-indigo-600 mt-4 mb-1">🔸 Session Layer</span>
                        <ul className="list-disc ml-8 space-y-1">
                          <li>What is the role of session layer in communication?</li>
                          <li>How do SSL/TLS and encryption help secure sessions?</li>
                        </ul>
                        <span className="block text-base font-semibold text-indigo-600 mt-4 mb-1">🔸 Presentation Layer</span>
                        <ul className="list-disc ml-8 space-y-1">
                          <li>What is the role of presentation layer (formatting/encryption)?</li>
                          <li>What is SSL/TLS and how does it help secure web traffic?</li>
                        </ul>
                        <span className="block text-base font-semibold text-indigo-600 mt-4 mb-1">🔸 Application Layer</span>
                        <ul className="list-disc ml-8 space-y-1">
                          <li>What happens when you enter google.com in the browser?</li>
                          <li>What is DNS? What is a DNS resolver?</li>
                          <li>What is a DNS server?</li>
                          <li>What is DNS spoofing?</li>
                          <li>What is DHCP? How does DHCP assign IPs?</li>
                          <li>What is FTP, SMTP, HTTP, and HTTPS?</li>
                          <li>What is SNMP and SNMPv3?</li>
                          <li>What is the function of a proxy server?</li>
                          <li>What is DNSSEC?</li>
                          <li>What is the difference between HTTP and HTTPS?</li>
                        </ul>
                      </div>
                      {/* Chapter 5: TCP/IP Model and Protocol Stack */}
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">Chapter 5: TCP/IP Model and Protocol Stack</span>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>What is the TCP/IP model?</li>
                          <li>What are the 4 layers of TCP/IP?</li>
                          <li>OSI vs TCP/IP model – key differences</li>
                          <li>What is ARP protocol?</li>
                          <li>What is ICMP?</li>
                          <li>What is DHCP protocol?</li>
                          <li>What is FTP protocol?</li>
                          <li>What is SMTP protocol?</li>
                          <li>What is SNMP?</li>
                        </ul>
                      </div>
                      {/* Chapter 6: Wireless & Modern Networking Technologies */}
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">Chapter 6: Wireless & Modern Networking Technologies</span>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>What is the difference between 802.11g and 802.11n?</li>
                          <li>What are WPA2 and WPA3?</li>
                          <li>How to secure a wireless network?</li>
                          <li>What is a mesh network and its advantages?</li>
                          <li>What is a Wi-Fi mesh network vs. traditional?</li>
                          <li>What are Unicast, Multicast, Anycast, and Broadcast?</li>
                        </ul>
                      </div>
                      {/* Chapter 7: Virtualization and Secure Networking */}
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">Chapter 7: Virtualization and Secure Networking</span>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>What is a VPN?</li>
                          <li>Types of VPNs (site-to-site vs. remote access)</li>
                          <li>What is SSL VPN vs IPsec VPN?</li>
                          <li>What is a DMZ in network security?</li>
                          <li>What is a stateful vs stateless firewall?</li>
                          <li>What is ACL (Access Control List)?</li>
                          <li>What is network encryption and how does it secure data?</li>
                          <li>What is NAT traversal?</li>
                          <li>What is DNSSEC?</li>
                          <li>What is an NPS server (RADIUS)?</li>
                        </ul>
                      </div>
                      {/* Chapter 8: Advanced Routing and Traffic Management */}
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">Chapter 8: Advanced Routing and Traffic Management</span>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>What is IP routing?</li>
                          <li>What is BGP and how it prevents loops?</li>
                          <li>What is the difference between EIGRP and OSPF?</li>
                          <li>What is RIP?</li>
                          <li>What is SD-WAN and how does it work?</li>
                          <li>What is HSRP (Hot Standby Router Protocol)?</li>
                          <li>What is network convergence?</li>
                          <li>What is GRE tunnel and how is it configured?</li>
                          <li>What is link aggregation?</li>
                          <li>What is port aggregation?</li>
                          <li>What is VTP?</li>
                        </ul>
                      </div>
                      {/* Chapter 9: Network Monitoring, Analysis & Troubleshooting */}
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">Chapter 9: Network Monitoring, Analysis & Troubleshooting</span>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>What is ping command and its usage?</li>
                          <li>How to troubleshoot latency?</li>
                          <li>What is Wireshark and how to analyze traffic?</li>
                          <li>What is a broadcast storm?</li>
                          <li>What is a default gateway and how to configure it?</li>
                          <li>What is the difference between ipconfig and ifconfig?</li>
                          <li>What is a distributed denial-of-service (DDoS) attack?</li>
                        </ul>
                      </div>
                      {/* Chapter 10: Cloud and Enterprise Networking */}
                      <div className="border border-indigo-100 rounded-xl bg-white/70 p-4 shadow-sm">
                        <span className="block text-lg font-bold text-indigo-700 mb-2">Chapter 10: Cloud and Enterprise Networking</span>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>What is SDN (Software Defined Networking)?</li>
                          <li>What is the benefit of SD-WAN over traditional WAN?</li>
                          <li>What is a multi-cloud environment?</li>
                          <li>How to secure enterprise networks in cloud?</li>
                          <li>What are challenges in IPv6 implementation?</li>
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

const CN = () => {
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
            Computer Networks (CN)
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-2 font-medium animate-slide-in-up">
            Master the core concepts of CN with a modern, structured flow
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

export default CN;