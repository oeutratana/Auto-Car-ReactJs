// import { useState } from "react";
// import {
//   LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
//   Tooltip, ResponsiveContainer, Legend
// } from "recharts";

// const COLORS = {
//   bg: "#0d0d0d",
//   sidebar: "#111111",
//   accent: "#c8f135",
//   teal: "#3dd9c4",
//   card: "#1a1a1a",
//   white: "#ffffff",
//   muted: "#888888",
//   yellow: "#f0e040",
// };

// const salesData = [
//   { month: "Jan", newBuyer: 80, repeatBuyer: 60 },
//   { month: "Feb", newBuyer: 120, repeatBuyer: 90 },
//   { month: "Mar", newBuyer: 100, repeatBuyer: 130 },
//   { month: "Apr", newBuyer: 160, repeatBuyer: 150 },
//   { month: "May", newBuyer: 250, repeatBuyer: 200 },
//   { month: "June", newBuyer: 210, repeatBuyer: 260 },
//   { month: "July", newBuyer: 270, repeatBuyer: 280 },
//   { month: "Aug", newBuyer: 290, repeatBuyer: 300 },
//   { month: "Sept", newBuyer: 310, repeatBuyer: 290 },
//   { month: "Oct", newBuyer: 280, repeatBuyer: 310 },
//   { month: "Nov", newBuyer: 320, repeatBuyer: 330 },
//   { month: "Dec", newBuyer: 300, repeatBuyer: 350 },
// ];

// const satisfactionData = [
//   { name: "W1", satisfied: 60, unsatisfied: 30 },
//   { name: "W2", satisfied: 80, unsatisfied: 40 },
//   { name: "W3", satisfied: 50, unsatisfied: 60 },
//   { name: "W4", satisfied: 90, unsatisfied: 20 },
//   { name: "W5", satisfied: 70, unsatisfied: 50 },
//   { name: "W6", satisfied: 110, unsatisfied: 30 },
//   { name: "W7", satisfied: 95, unsatisfied: 45 },
// ];

// const volumeData = [
//   { name: "Jan", volume: 70, services: 50 },
//   { name: "Feb", volume: 90, services: 40 },
//   { name: "Mar", volume: 60, services: 70 },
//   { name: "Apr", volume: 80, services: 60 },
//   { name: "May", volume: 100, services: 50 },
// ];

// const topProducts = [
//   { rank: "01", name: "MacBook Air", popularity: 70 },
//   { rank: "02", name: "USB-C VGA Multiport Adapter", popularity: 58 },
//   { rank: "03", name: "Mac Pro Feet Kit", popularity: 18 },
//   { rank: "04", name: "Apple 30-pin to USB Cable", popularity: 7 },
// ];

// const navItems = [
//   { id: "dashboard", label: "Dashboard", icon: "⊞" },
//   { id: "leaderboard", label: "Leaderboard", icon: "📊" },
//   { id: "order", label: "Order", icon: "🛒" },
//   { id: "salesreport", label: "Sales Report", icon: "📈" },
//   { id: "settings", label: "Settings", icon: "⚙️" },
// ];

// // ─── Sub Pages ───────────────────────────────────────────────────────────────

// function LeaderboardPage() {
//   const reps = [
//     { rank: 1, name: "Alice Torres", sales: 320, badge: "🥇" },
//     { rank: 2, name: "James McGill", sales: 270, badge: "🥈" },
//     { rank: 3, name: "Priya Sharma", sales: 240, badge: "🥉" },
//     { rank: 4, name: "Leo Chen", sales: 200, badge: "" },
//     { rank: 5, name: "Maya Okonkwo", sales: 185, badge: "" },
//   ];
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2 style={{ color: COLORS.white, fontFamily: "'Syne', sans-serif", fontSize: "1.6rem", marginBottom: "0.3rem" }}>Leaderboard</h2>
//       <p style={{ color: COLORS.muted, marginBottom: "1.5rem", fontSize: "0.85rem" }}>Top Sales Representatives</p>
//       <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
//         {reps.map((r) => (
//           <div key={r.rank} style={{
//             background: r.rank === 1 ? COLORS.accent : COLORS.card,
//             borderRadius: "14px", padding: "1rem 1.5rem",
//             display: "flex", alignItems: "center", gap: "1rem",
//             boxShadow: r.rank === 1 ? "0 4px 24px #c8f13544" : "none",
//             transition: "transform 0.2s",
//           }}>
//             <span style={{ fontSize: "1.5rem", width: "2rem" }}>{r.badge || `#${r.rank}`}</span>
//             <div style={{ flex: 1 }}>
//               <div style={{ color: r.rank === 1 ? "#111" : COLORS.white, fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>{r.name}</div>
//               <div style={{ fontSize: "0.8rem", color: r.rank === 1 ? "#333" : COLORS.muted }}>Sales Rep</div>
//             </div>
//             <div style={{
//               background: r.rank === 1 ? "#111" : COLORS.accent,
//               color: r.rank === 1 ? COLORS.accent : "#111",
//               borderRadius: "8px", padding: "0.3rem 0.9rem",
//               fontWeight: 800, fontSize: "1rem", fontFamily: "'Syne', sans-serif"
//             }}>{r.sales}k</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function OrderPage() {
//   const orders = [
//     { id: "#1042", product: "MacBook Air", qty: 2, status: "Delivered", date: "Jun 1" },
//     { id: "#1041", product: "USB-C VGA Adapter", qty: 5, status: "Processing", date: "Jun 2" },
//     { id: "#1040", product: "Mac Pro Feet Kit", qty: 1, status: "Shipped", date: "Jun 3" },
//     { id: "#1039", product: "Apple 30-pin Cable", qty: 3, status: "Delivered", date: "Jun 4" },
//     { id: "#1038", product: "MacBook Air", qty: 1, status: "Cancelled", date: "Jun 5" },
//   ];
//   const statusColor = { Delivered: COLORS.teal, Processing: COLORS.accent, Shipped: "#f0a840", Cancelled: "#f15555" };
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2 style={{ color: COLORS.white, fontFamily: "'Syne', sans-serif", fontSize: "1.6rem", marginBottom: "0.3rem" }}>Orders</h2>
//       <p style={{ color: COLORS.muted, marginBottom: "1.5rem", fontSize: "0.85rem" }}>Recent order activity</p>
//       <div style={{ background: COLORS.card, borderRadius: "16px", overflow: "hidden" }}>
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ background: "#222" }}>
//               {["Order ID", "Product", "Qty", "Date", "Status"].map(h => (
//                 <th key={h} style={{ padding: "0.9rem 1.2rem", textAlign: "left", color: COLORS.muted, fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em" }}>{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((o, i) => (
//               <tr key={o.id} style={{ borderTop: "1px solid #222", background: i % 2 === 0 ? "transparent" : "#161616" }}>
//                 <td style={{ padding: "0.85rem 1.2rem", color: COLORS.accent, fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>{o.id}</td>
//                 <td style={{ padding: "0.85rem 1.2rem", color: COLORS.white }}>{o.product}</td>
//                 <td style={{ padding: "0.85rem 1.2rem", color: COLORS.muted }}>{o.qty}</td>
//                 <td style={{ padding: "0.85rem 1.2rem", color: COLORS.muted }}>{o.date}</td>
//                 <td style={{ padding: "0.85rem 1.2rem" }}>
//                   <span style={{
//                     background: statusColor[o.status] + "22",
//                     color: statusColor[o.status],
//                     borderRadius: "6px", padding: "0.2rem 0.7rem",
//                     fontSize: "0.78rem", fontWeight: 700
//                   }}>{o.status}</span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// function SalesReportPage() {
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2 style={{ color: COLORS.white, fontFamily: "'Syne', sans-serif", fontSize: "1.6rem", marginBottom: "0.3rem" }}>Sales Report</h2>
//       <p style={{ color: COLORS.muted, marginBottom: "1.5rem", fontSize: "0.85rem" }}>Annual sales performance overview</p>
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}>
//         {[["Total Revenue", "$42.3k", "+18%"], ["Total Orders", "3,820", "+11%"], ["Avg. Order Value", "$110", "+5%"], ["Return Rate", "2.4%", "-0.8%"]].map(([label, val, change]) => (
//           <div key={label} style={{ background: COLORS.card, borderRadius: "14px", padding: "1.25rem 1.5rem" }}>
//             <div style={{ color: COLORS.muted, fontSize: "0.82rem", marginBottom: "0.4rem" }}>{label}</div>
//             <div style={{ color: COLORS.white, fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 800 }}>{val}</div>
//             <div style={{ color: change.startsWith("+") ? COLORS.teal : "#f15555", fontSize: "0.82rem", marginTop: "0.3rem" }}>{change} vs last year</div>
//           </div>
//         ))}
//       </div>
//       <div style={{ background: COLORS.card, borderRadius: "14px", padding: "1.5rem" }}>
//         <div style={{ color: COLORS.white, fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "1rem" }}>Monthly Sales (New vs Repeat)</div>
//         <ResponsiveContainer width="100%" height={220}>
//           <LineChart data={salesData}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#222" />
//             <XAxis dataKey="month" stroke={COLORS.muted} tick={{ fontSize: 11 }} />
//             <YAxis stroke={COLORS.muted} tick={{ fontSize: 11 }} />
//             <Tooltip contentStyle={{ background: "#1a1a1a", border: "none", borderRadius: 10, color: COLORS.white }} />
//             <Legend />
//             <Line type="monotone" dataKey="newBuyer" stroke={COLORS.accent} strokeWidth={2.5} dot={false} name="New Buyer" />
//             <Line type="monotone" dataKey="repeatBuyer" stroke={COLORS.teal} strokeWidth={2.5} dot={false} name="Repeat Buyer" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// function SettingsPage() {
//   const [notif, setNotif] = useState(true);
//   const [dark, setDark] = useState(true);
//   const [email, setEmail] = useState("james.mcgill@goodboard.io");
//   return (
//     <div style={{ padding: "2rem", maxWidth: 540 }}>
//       <h2 style={{ color: COLORS.white, fontFamily: "'Syne', sans-serif", fontSize: "1.6rem", marginBottom: "0.3rem" }}>Settings</h2>
//       <p style={{ color: COLORS.muted, marginBottom: "1.5rem", fontSize: "0.85rem" }}>Manage your account preferences</p>
//       <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//         <div style={{ background: COLORS.card, borderRadius: "14px", padding: "1.25rem 1.5rem" }}>
//           <div style={{ color: COLORS.muted, fontSize: "0.78rem", marginBottom: "0.5rem", letterSpacing: "0.07em", textTransform: "uppercase" }}>Account</div>
//           <div style={{ color: COLORS.white, fontWeight: 700, fontFamily: "'Syne', sans-serif", marginBottom: "0.4rem" }}>James McGill</div>
//           <input
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             style={{
//               background: "#222", border: "1.5px solid #333", borderRadius: "8px",
//               color: COLORS.white, padding: "0.5rem 0.9rem", width: "100%", fontSize: "0.9rem", outline: "none"
//             }}
//           />
//         </div>
//         {[["Email Notifications", notif, setNotif], ["Dark Mode", dark, setDark]].map(([label, val, setter]) => (
//           <div key={label} style={{ background: COLORS.card, borderRadius: "14px", padding: "1.1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//             <span style={{ color: COLORS.white, fontWeight: 600 }}>{label}</span>
//             <div
//               onClick={() => setter(!val)}
//               style={{
//                 width: 44, height: 24, borderRadius: 12,
//                 background: val ? COLORS.accent : "#333",
//                 position: "relative", cursor: "pointer", transition: "background 0.2s"
//               }}
//             >
//               <div style={{
//                 position: "absolute", top: 3, left: val ? 22 : 3,
//                 width: 18, height: 18, borderRadius: "50%", background: val ? "#111" : "#888",
//                 transition: "left 0.2s"
//               }} />
//             </div>
//           </div>
//         ))}
//         <button style={{
//           background: COLORS.accent, color: "#111", fontWeight: 800, fontFamily: "'Syne', sans-serif",
//           border: "none", borderRadius: "10px", padding: "0.8rem 1.5rem", cursor: "pointer", fontSize: "0.95rem"
//         }}>Save Changes</button>
//       </div>
//     </div>
//   );
// }

// // ─── Dashboard Page ───────────────────────────────────────────────────────────

// function DashboardPage() {
//   return (
//     <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
//       {/* Header Row */}
//       <div style={{ display: "flex", gap: "1.25rem" }}>
//         {/* Today's Sales Cards */}
//         <div style={{ flex: "1 1 60%" }}>
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
//             <div>
//               <div style={{ color: COLORS.white, fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>Today's Sales</div>
//               <div style={{ color: COLORS.muted, fontSize: "0.8rem" }}>Sales Summary</div>
//             </div>
//             <button style={{
//               background: "transparent", border: "1.5px solid #333",
//               borderRadius: "8px", color: COLORS.white, padding: "0.4rem 1rem",
//               cursor: "pointer", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "0.4rem"
//             }}>Export ↑</button>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
//             {[
//               { icon: "🚀", val: "$1k", label: "Total Sales", change: "+20% from last month" },
//               { icon: "📦", val: "350", label: "Total Order", change: "+10% from last month" },
//               { icon: "👤", val: "345", label: "New Buyers", change: "+40% from last month" },
//             ].map(({ icon, val, label, change }) => (
//               <div key={label} style={{
//                 background: "#111", borderRadius: "14px", padding: "1.1rem 1.2rem",
//                 border: "1px solid #222", position: "relative", overflow: "hidden"
//               }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
//                   <div style={{
//                     background: "#222", width: 38, height: 38, borderRadius: "50%",
//                     display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem"
//                   }}>{icon}</div>
//                   <span style={{ color: COLORS.muted, fontSize: "0.9rem" }}>↗</span>
//                 </div>
//                 <div style={{ color: COLORS.white, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.5rem" }}>{val}</div>
//                 <div style={{ color: COLORS.muted, fontSize: "0.75rem", marginBottom: "0.6rem" }}>{label}</div>
//                 <div style={{
//                   background: COLORS.accent + "22", color: COLORS.accent,
//                   borderRadius: "6px", padding: "0.15rem 0.6rem", fontSize: "0.72rem", fontWeight: 700, display: "inline-block"
//                 }}>{change}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Volume Service Level */}
//         <div style={{ flex: "1 1 38%", background: COLORS.card, borderRadius: "16px", padding: "1.2rem 1.4rem" }}>
//           <div style={{ color: COLORS.white, fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "0.8rem" }}>Volume Service Level</div>
//           <ResponsiveContainer width="100%" height={130}>
//             <BarChart data={volumeData} barGap={2}>
//               <XAxis dataKey="name" stroke={COLORS.muted} tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
//               <Tooltip contentStyle={{ background: "#1a1a1a", border: "none", borderRadius: 8, color: COLORS.white }} />
//               <Bar dataKey="volume" fill={COLORS.teal} radius={[4, 4, 0, 0]} />
//               <Bar dataKey="services" fill={COLORS.accent} radius={[4, 4, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//           <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.5rem" }}>
//             <div><span style={{ color: COLORS.teal, fontSize: "0.75rem" }}>■ Volume</span><div style={{ color: COLORS.white, fontWeight: 700, fontSize: "0.9rem" }}>1,135</div></div>
//             <div><span style={{ color: COLORS.accent, fontSize: "0.75rem" }}>■ Services</span><div style={{ color: COLORS.white, fontWeight: 700, fontSize: "0.9rem" }}>635</div></div>
//           </div>
//         </div>
//       </div>

//       {/* Middle Row */}
//       <div style={{ display: "flex", gap: "1.25rem" }}>
//         {/* Buyer Satisfaction */}
//         <div style={{ flex: "1 1 35%", background: COLORS.accent, borderRadius: "16px", padding: "1.2rem 1.4rem" }}>
//           <div style={{ color: "#111", fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "0.8rem", fontSize: "1rem" }}>Buyer Satisfaction</div>
//           <ResponsiveContainer width="100%" height={150}>
//             <BarChart data={satisfactionData} barGap={2}>
//               <XAxis dataKey="name" stroke="#555" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
//               <Tooltip contentStyle={{ background: "#111", border: "none", borderRadius: 8, color: "#fff" }} />
//               <Bar dataKey="satisfied" fill={COLORS.teal} radius={[4, 4, 0, 0]} />
//               <Bar dataKey="unsatisfied" fill="#111" radius={[4, 4, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//           <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
//             <span style={{ fontSize: "0.74rem", color: "#333", display: "flex", alignItems: "center", gap: 4 }}><span style={{ color: COLORS.teal }}>■</span> Satisfied</span>
//             <span style={{ fontSize: "0.74rem", color: "#333", display: "flex", alignItems: "center", gap: 4 }}><span style={{ color: "#111" }}>■</span> Unsatisfied</span>
//           </div>
//         </div>

//         {/* Today's Sales Line Chart */}
//         <div style={{ flex: "1 1 63%", background: COLORS.card, borderRadius: "16px", padding: "1.2rem 1.4rem" }}>
//           <div style={{ color: COLORS.white, fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "0.8rem" }}>Today's Sales</div>
//           <ResponsiveContainer width="100%" height={180}>
//             <LineChart data={salesData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
//               <XAxis dataKey="month" stroke={COLORS.muted} tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
//               <YAxis stroke={COLORS.muted} tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
//               <Tooltip
//                 contentStyle={{ background: "#111", border: "none", borderRadius: 10, color: COLORS.white }}
//                 cursor={{ stroke: COLORS.accent, strokeWidth: 1, strokeDasharray: "4 4" }}
//               />
//               <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "0.78rem" }} />
//               <Line type="monotone" dataKey="newBuyer" stroke={COLORS.teal} strokeWidth={2.5} dot={false} name="New Buyer" />
//               <Line type="monotone" dataKey="repeatBuyer" stroke={COLORS.accent} strokeWidth={2.5} dot={false} name="Repeat Buyer" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Bottom Row */}
//       <div style={{ display: "flex", gap: "1.25rem" }}>
//         {/* Top Products */}
//         <div style={{ flex: "1 1 60%", background: COLORS.card, borderRadius: "16px", padding: "1.2rem 1.5rem" }}>
//           <div style={{ color: COLORS.white, fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "1rem" }}>Top Products</div>
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr>
//                 {["#", "Name", "Popularity", "Sales"].map(h => (
//                   <th key={h} style={{ textAlign: "left", padding: "0.3rem 0.5rem", color: COLORS.muted, fontSize: "0.75rem", fontWeight: 500 }}>{h}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {topProducts.map(p => (
//                 <tr key={p.rank}>
//                   <td style={{ padding: "0.55rem 0.5rem", color: COLORS.muted, fontSize: "0.82rem" }}>{p.rank}</td>
//                   <td style={{ padding: "0.55rem 0.5rem", color: COLORS.white, fontSize: "0.85rem" }}>{p.name}</td>
//                   <td style={{ padding: "0.55rem 0.5rem", width: "40%" }}>
//                     <div style={{ background: "#222", borderRadius: 99, height: 8, overflow: "hidden" }}>
//                       <div style={{
//                         height: "100%", borderRadius: 99,
//                         width: `${p.popularity}%`,
//                         background: p.popularity > 50 ? COLORS.accent : COLORS.teal,
//                         transition: "width 0.6s ease"
//                       }} />
//                     </div>
//                   </td>
//                   <td style={{ padding: "0.55rem 0.5rem" }}>
//                     <span style={{
//                       background: "#222", borderRadius: "6px", padding: "0.2rem 0.6rem",
//                       color: COLORS.white, fontSize: "0.78rem", fontWeight: 700
//                     }}>{p.popularity}%</span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* World Map Placeholder */}
//         <div style={{ flex: "1 1 38%", background: COLORS.card, borderRadius: "16px", padding: "1.2rem 1.4rem" }}>
//           <div style={{ color: COLORS.white, fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "0.8rem" }}>Volume Service Level</div>
//           <div style={{ position: "relative", height: 160, background: "#161616", borderRadius: 10, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <svg viewBox="0 0 500 280" style={{ width: "100%", height: "100%", opacity: 0.85 }}>
//               {/* Simple stylised world continents */}
//               <ellipse cx="120" cy="110" rx="70" ry="50" fill="#222" />
//               <ellipse cx="130" cy="160" rx="50" ry="55" fill="#222" />
//               <ellipse cx="260" cy="95" rx="110" ry="60" fill={COLORS.teal} opacity="0.7"/>
//               <ellipse cx="270" cy="160" rx="55" ry="60" fill={COLORS.teal} opacity="0.5" />
//               <ellipse cx="390" cy="100" rx="60" ry="45" fill="#222" />
//               <ellipse cx="420" cy="160" rx="35" ry="50" fill="#222" />
//               <ellipse cx="460" cy="185" rx="28" ry="35" fill={COLORS.teal} opacity="0.4" />
//               <ellipse cx="190" cy="200" rx="30" ry="25" fill="#222" />
//             </svg>
//           </div>
//           <div style={{ marginTop: "0.7rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
//             <span style={{ color: COLORS.teal, fontSize: "0.78rem" }}>■</span>
//             <span style={{ color: COLORS.muted, fontSize: "0.78rem" }}>Sales Area</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Main App ─────────────────────────────────────────────────────────────────

// export default function App() {
//   const [active, setActive] = useState("dashboard");

//   const pages = {
//     dashboard: <DashboardPage />,
//     leaderboard: <LeaderboardPage />,
//     order: <OrderPage />,
//     salesreport: <SalesReportPage />,
//     settings: <SettingsPage />,
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         body { background: ${COLORS.bg}; font-family: 'DM Sans', sans-serif; }
//         ::-webkit-scrollbar { width: 4px; }
//         ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
//       `}</style>

//       <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: COLORS.bg }}>
//         {/* Sidebar */}
//         <aside style={{
//           width: 220, background: COLORS.sidebar, display: "flex", flexDirection: "column",
//           padding: "1.5rem 1rem", borderRight: "1px solid #1a1a1a", flexShrink: 0,
//         }}>
//           {/* Logo */}
//           <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: COLORS.white, marginBottom: "2.5rem", paddingLeft: "0.5rem" }}>
//             G<span style={{ color: COLORS.accent }}>o</span>odBoard
//           </div>

//           {/* Nav */}
//           <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
//             {navItems.map(({ id, label, icon }) => (
//               <button
//                 key={id}
//                 onClick={() => setActive(id)}
//                 style={{
//                   display: "flex", alignItems: "center", gap: "0.75rem",
//                   padding: "0.7rem 0.9rem", borderRadius: "10px",
//                   background: active === id ? COLORS.accent : "transparent",
//                   color: active === id ? "#111" : COLORS.muted,
//                   border: "none", cursor: "pointer", width: "100%", textAlign: "left",
//                   fontFamily: "'DM Sans', sans-serif", fontWeight: active === id ? 700 : 500,
//                   fontSize: "0.88rem", transition: "all 0.15s",
//                 }}
//               >
//                 <span style={{ fontSize: "1rem" }}>{icon}</span>
//                 {label}
//               </button>
//             ))}
//             <button
//               onClick={() => alert("Signing out…")}
//               style={{
//                 display: "flex", alignItems: "center", gap: "0.75rem",
//                 padding: "0.7rem 0.9rem", borderRadius: "10px",
//                 background: "transparent", color: COLORS.muted,
//                 border: "none", cursor: "pointer", width: "100%", textAlign: "left",
//                 fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.88rem",
//                 marginTop: "auto",
//               }}
//             >
//               <span>🚪</span> Sign Out
//             </button>
//           </nav>

//           {/* Go Pro Card */}
//           <div style={{
//             background: COLORS.accent, borderRadius: "16px", padding: "1.1rem",
//             marginTop: "1.5rem", textAlign: "center"
//           }}>
//             <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#111", fontSize: "1.1rem", marginBottom: "0.2rem" }}>GO+</div>
//             <div style={{ fontSize: "0.72rem", color: "#333", marginBottom: "0.8rem" }}>Get all features on GoodBoard</div>
//             <button style={{
//               background: "#111", color: COLORS.white, border: "none", borderRadius: "8px",
//               padding: "0.5rem 1rem", cursor: "pointer", fontWeight: 700, fontFamily: "'Syne', sans-serif",
//               fontSize: "0.8rem", width: "100%"
//             }}>Go Pro now ↑</button>
//           </div>
//         </aside>

//         {/* Main */}
//         <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
//           {/* Topbar */}
//           <header style={{
//             display: "flex", alignItems: "center", gap: "1rem",
//             padding: "0.85rem 1.5rem", borderBottom: "1px solid #1a1a1a",
//             background: COLORS.sidebar, flexShrink: 0,
//           }}>
//             <div style={{
//               flex: 1, background: "#161616", borderRadius: "10px",
//               padding: "0.5rem 1rem", display: "flex", alignItems: "center", gap: "0.6rem",
//               border: "1px solid #222"
//             }}>
//               <span style={{ color: COLORS.muted }}>🔍</span>
//               <span style={{ color: COLORS.muted, fontSize: "0.85rem" }}>Tap here to search</span>
//             </div>
//             <div style={{ display: "flex", gap: "0.75rem", color: COLORS.muted, fontSize: "1.1rem" }}>
//               <span style={{ cursor: "pointer" }}>🔔</span>
//               <span style={{ cursor: "pointer" }}>💬</span>
//             </div>
//             <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
//               <div style={{
//                 width: 36, height: 36, borderRadius: "50%", background: COLORS.accent,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontWeight: 800, color: "#111", fontFamily: "'Syne', sans-serif", fontSize: "0.85rem"
//               }}>JM</div>
//               <div>
//                 <div style={{ color: COLORS.white, fontSize: "0.85rem", fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>James McGill</div>
//                 <div style={{ color: COLORS.muted, fontSize: "0.72rem" }}>Sales Manager</div>
//               </div>
//             </div>
//           </header>

//           {/* Page Content */}
//           <main style={{ flex: 1, overflowY: "auto" }}>
//             {pages[active]}
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          minHeight: "100vh",
          background: "#111",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Admin Panel</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="overview">Overview</Link></li>
          <li><Link to="users">Users</Link></li>
          <li><Link to="cars">Cars</Link></li>
          <li><Link to="orders">Orders</Link></li>
          <li><Link to="payments">Payments</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;