import { useState, useEffect } from "react";
import {
  HelpCircle,
  ChevronDown,
  AlertTriangle,
  Star,
  Clock,
  FileText,
  Upload,
  Send,
  BookOpen,
  Video,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  BarChart2,
  Zap,
  Share2,
  Plus,
  CornerUpLeft,
  Menu,
} from "lucide-react";

/* ───────── colour tokens ───────── */
const C = {
  navy: "#002244",
  blue: "#336699",
  accent: "#4A90D9",
  light: "#E8F0FE",
  lightHover: "#D0E2FC",
};

/* ───────── tiny reusable bits ───────── */
const Badge = ({ children, color = "red" }) => (
  <span
    className={`text-xs font-semibold px-2 py-0.5 rounded-full inline-block`}
    style={{
      backgroundColor: color === "red" ? "#FEE2E2" : color === "green" ? "#D1FAE5" : "#E0E7FF",
      color: color === "red" ? "#B91C1C" : color === "green" ? "#047857" : "#3730A3",
    }}
  >
    {children}
  </span>
);

const Btn = ({ children, variant = "primary", className = "", ...rest }) => {
  const base = "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-150 cursor-pointer flex items-center gap-1.5";
  const styles =
    variant === "primary"
      ? { backgroundColor: C.accent, color: "#fff" }
      : variant === "dark"
      ? { backgroundColor: C.navy, color: "#fff" }
      : { border: "1px solid #D1D5DB", color: "#374151", backgroundColor: "#fff" };
  return (
    <button className={`${base} ${className}`} style={styles} {...rest}>
      {children}
    </button>
  );
};

const SectionCard = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-xl p-5 ${className}`}
    style={{ border: "1px solid #E5E7EB", boxShadow: "0 1px 3px rgba(0,0,0,.04)" }}
  >
    {children}
  </div>
);

const SectionTitle = ({ icon, emoji, children }) => (
  <div className="flex items-center gap-2 mb-4">
    {icon && <span style={{ color: C.accent }}>{icon}</span>}
    {emoji && <span className="text-lg">{emoji}</span>}
    <h2 className="text-base font-bold" style={{ color: C.navy }}>
      {children}
    </h2>
  </div>
);

const Stars = ({ count }) => (
  <span className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} fill={i < count ? "#F59E0B" : "none"} color={i < count ? "#F59E0B" : "#D1D5DB"} />
    ))}
  </span>
);

/* ───────── main component ───────── */
export default function IMFSupportCenter() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  /* inject Inter font once */
  useEffect(() => {
    if (!document.getElementById("imf-font")) {
      const link = document.createElement("link");
      link.id = "imf-font";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  /* ── data ── */
  const questions = [
    { q: "Can I extend my trip for personal travel at my expense?", dept: "Finance Dept", time: "2 hours ago" },
    { q: "What's the per diem rate for Nairobi in 2026?", dept: "Research Dept", time: "4 hours ago" },
    { q: "Do I need pre-approval for business class on 8-hour flights?", dept: "Legal Dept", time: "Yesterday" },
  ];
  const topAsked = [
    { title: "Visa application procedures", count: 127 },
    { title: "Per diem rates by country", count: 94 },
    { title: "Flight booking deadlines", count: 76 },
    { title: "Hotel expense limits", count: 68 },
  ];
  const feedback = [
    { stars: 5, text: "Found exactly what I needed about visa timelines!" },
    { stars: 3, text: "Answer was helpful but could be clearer on exceptions" },
    { stars: 1, text: "Couldn't find info about travel insurance requirements" },
  ];
  const quickActions = [
    { icon: <FileText size={18} />, label: "Add New Policy / FAQ" },
    { icon: <FileText size={18} />, label: "Update Existing Content" },
    { icon: <MessageSquare size={18} />, label: "Review Feedback Queue" },
    { icon: <Upload size={18} />, label: "Upload Travel Documents" },
    { icon: <Send size={18} />, label: "Send Announcement" },
  ];
  const activityLog = [
    { text: "Sarah Johnson updated 'Per Diem Rates – Europe'", time: "2 hours ago" },
    { text: "You published 'New Visa Requirements 2026'", time: "Yesterday, 3:45 PM" },
    { text: "Michael Chen added FAQ about baggage policies", time: "2 days ago" },
  ];
  const reminders = [
    "Annual travel policy review due: March 15",
    "Update per diem rates (quarterly)",
    "Travel insurance policy expires: April 30",
  ];
  const topics = [
    { label: "Visas & Documentation", pct: 35, color: "#002244" },
    { label: "Per Diem & Expenses", pct: 28, color: "#336699" },
    { label: "Booking Procedures", pct: 22, color: "#4A90D9" },
    { label: "Other", pct: 15, color: "#94A3B8" },
  ];
  const suggestions = [
    "15 users asked about remote work + travel policies — Consider adding guidance",
    "Per diem questions increased 40% — Rates may need clarification",
    "Frequent confusion about pre-approval thresholds",
  ];

  /* ── render ── */
  return (
    <div
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        height: "100vh",
        display: "flex",
        background: "#F3F4F6",
        overflow: "hidden",
      }}
    >
      {/* ╔═══════════ LEFT: Admin Panel ═══════════╗ */}
      <div style={{ flex: "3", display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* ── Top Nav ── */}
        <nav
          style={{
            background: "#fff",
            borderBottom: "1px solid #E5E7EB",
            padding: "0 24px",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            zIndex: 50,
          }}
        >
          {/* left – logo & name */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 36,
                height: 36,
                background: `linear-gradient(135deg, ${C.navy}, ${C.blue})`,
              }}
            >
              <span className="text-white font-bold text-xs tracking-wide">IMF</span>
            </div>
            <span className="font-bold text-base" style={{ color: C.navy }}>
              Support Center
            </span>
          </div>

          {/* centre – tabs */}
          <div className="flex items-center gap-6">
            {["Dashboard", "Queries", "Policies", "Analytics", "Users"].map((t) => {
              const key = t.toLowerCase();
              const active = activeTab === key;
              return (
                <button
                  key={t}
                  onClick={() => setActiveTab(key)}
                  className="relative pb-1 text-sm font-medium transition-colors cursor-pointer"
                  style={{ color: active ? C.navy : "#6B7280", background: "none", border: "none" }}
                >
                  {t}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: -12,
                        left: 0,
                        right: 0,
                        height: 2,
                        borderRadius: 1,
                        background: C.accent,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* right – icons & avatar */}
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer" style={{ border: "none", background: "none" }}>
              <HelpCircle size={18} color="#6B7280" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer" style={{ border: "none", background: "none" }}>
              <Menu size={18} color="#6B7280" />
            </button>

            {/* avatar */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
                style={{ border: "none", background: "none" }}
              >
                <div
                  className="flex items-center justify-center rounded-full text-white font-semibold"
                  style={{ width: 32, height: 32, background: C.accent, fontSize: 12 }}
                >
                  AK
                </div>
                {/* red badge */}
                <span
                  className="flex items-center justify-center rounded-full text-white font-bold"
                  style={{ width: 18, height: 18, fontSize: 10, background: "#EF4444", marginLeft: -6, marginTop: -16 }}
                >
                  3
                </span>
                <ChevronDown size={14} color="#6B7280" />
              </button>

              {menuOpen && (
                <div
                  className="absolute right-0 mt-1 rounded-lg py-1"
                  style={{ width: 180, background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 4px 12px rgba(0,0,0,.12)", zIndex: 60 }}
                >
                  {["Profile", "Notifications (3)", "Settings"].map((item) => (
                    <button
                      key={item}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                      style={{ border: "none", background: "none" }}
                    >
                      {item}
                    </button>
                  ))}
                  <hr style={{ margin: "4px 0", border: "none", borderTop: "1px solid #E5E7EB" }} />
                  <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                    style={{ border: "none", background: "none", color: "#DC2626" }}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* ── Scrollable body ── */}
        <div style={{ flex: 1, overflowY: "auto", padding: 24 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }} className="space-y-6">
            {/* ──────── Hero Metrics ──────── */}
            <div className="grid grid-cols-4 gap-4">
              {/* Queries This Week */}
              <SectionCard className="hover:shadow-md transition-shadow">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Queries This Week</p>
                <p className="text-3xl font-bold" style={{ color: C.navy }}>847</p>
                <p className="text-sm font-medium mt-2 flex items-center gap-1" style={{ color: "#059669" }}>
                  <TrendingUp size={14} /> 12% vs last week
                </p>
              </SectionCard>

              {/* Unanswered */}
              <SectionCard className="hover:shadow-md transition-shadow">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Unanswered Questions</p>
                <p className="text-3xl font-bold" style={{ color: C.navy }}>23</p>
                <div className="mt-2">
                  <Badge color="red">Requires HR Review</Badge>
                </div>
              </SectionCard>

              {/* Pending Feedback */}
              <SectionCard className="hover:shadow-md transition-shadow">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Pending Feedback</p>
                <p className="text-3xl font-bold" style={{ color: C.navy }}>8</p>
                <button
                  className="text-sm font-medium mt-2 flex items-center gap-1 cursor-pointer"
                  style={{ color: C.accent, background: "none", border: "none", padding: 0 }}
                >
                  View feedback queue <ArrowRight size={14} />
                </button>
              </SectionCard>

              {/* Content Items */}
              <SectionCard className="hover:shadow-md transition-shadow">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Content Items</p>
                <p className="text-3xl font-bold" style={{ color: C.navy }}>134</p>
                <p className="text-xs text-gray-500 mt-2">7 updated this week</p>
              </SectionCard>
            </div>

            {/* ──────── Two-column content ──────── */}
            <div style={{ display: "grid", gridTemplateColumns: "65fr 35fr", gap: 24 }}>
              {/* ── LEFT COLUMN ── */}
              <div className="space-y-6" style={{ minWidth: 0 }}>
                {/* Questions Requiring Attention */}
                <SectionCard>
                  <SectionTitle icon={<AlertTriangle size={18} />}>Questions Requiring Your Attention</SectionTitle>
                  <div className="space-y-3">
                    {questions.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-lg p-4 hover:bg-gray-50 transition-colors"
                        style={{ border: "1px solid #E5E7EB" }}
                      >
                        <p className="font-medium text-gray-900 mb-2 text-sm">{item.q}</p>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="px-2 py-0.5 rounded-full" style={{ background: C.light, color: C.navy, fontWeight: 600 }}>
                              {item.dept}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} /> {item.time}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <Btn variant="primary">Answer</Btn>
                            <Btn variant="outline">Add to FAQ</Btn>
                            <Btn variant="outline">
                              <Share2 size={13} /> Forward
                            </Btn>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionCard>

                {/* Most Asked Questions */}
                <SectionCard>
                  <SectionTitle icon={<BarChart2 size={18} />}>Most Asked Questions This Week</SectionTitle>
                  <div className="space-y-4">
                    {topAsked.map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-900">
                            {i + 1}. {item.title}
                          </span>
                          <span className="text-gray-500 text-xs font-semibold">{item.count} queries</span>
                        </div>
                        <div className="w-full rounded-full h-2" style={{ background: "#E5E7EB" }}>
                          <div
                            className="h-2 rounded-full transition-all"
                            style={{
                              width: `${(item.count / 127) * 100}%`,
                              background: `linear-gradient(90deg, ${C.accent}, ${C.blue})`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <Btn variant="dark">Update These Policies</Btn>
                  </div>
                </SectionCard>

                {/* Recent User Feedback */}
                <SectionCard>
                  <SectionTitle icon={<Star size={18} color="#F59E0B" />}>Recent User Feedback</SectionTitle>
                  <div className="space-y-3">
                    {feedback.map((fb, i) => (
                      <div key={i} className="rounded-lg p-4 hover:bg-gray-50 transition-colors" style={{ border: "1px solid #E5E7EB" }}>
                        <Stars count={fb.stars} />
                        <p className="text-sm text-gray-700 mt-2 mb-3">"{fb.text}"</p>
                        <div className="flex gap-4">
                          <button
                            className="text-xs font-semibold cursor-pointer hover:underline"
                            style={{ color: C.accent, background: "none", border: "none", padding: 0 }}
                          >
                            View Full Feedback
                          </button>
                          <button
                            className="text-xs font-semibold cursor-pointer hover:underline flex items-center gap-1"
                            style={{ color: C.accent, background: "none", border: "none", padding: 0 }}
                          >
                            <CornerUpLeft size={12} /> Reply to User
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              </div>

              {/* ── RIGHT COLUMN (Sidebar) ── */}
              <div className="space-y-6" style={{ minWidth: 0 }}>
                {/* Quick Actions */}
                <SectionCard>
                  <SectionTitle emoji="🎯">Quick Actions</SectionTitle>
                  <div className="space-y-2">
                    {quickActions.map((a, i) => (
                      <button
                        key={i}
                        className="w-full flex items-center gap-3 p-3 rounded-lg text-left text-sm font-medium transition-all cursor-pointer"
                        style={{
                          border: `1px solid #E5E7EB`,
                          color: "#1F2937",
                          background: "#fff",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = C.light;
                          e.currentTarget.style.borderColor = C.accent;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#fff";
                          e.currentTarget.style.borderColor = "#E5E7EB";
                        }}
                      >
                        <span style={{ color: C.accent }}>{a.icon}</span>
                        {a.label}
                      </button>
                    ))}
                  </div>
                </SectionCard>

                {/* Content Status */}
                <SectionCard>
                  <SectionTitle>Content Status Summary</SectionTitle>
                  <div className="space-y-3 text-sm">
                    {[
                      { label: "Published policies", val: "127", color: C.navy },
                      { label: "Draft policies", val: "5", color: "#D97706", sub: "awaiting review" },
                      { label: "Outdated content", val: "3", color: "#DC2626", sub: "> 12 months old" },
                      { label: "Scheduled updates", val: "2", color: "#059669", sub: "next week" },
                    ].map((s, i) => (
                      <div key={i} className="flex justify-between items-baseline">
                        <span className="text-gray-600">
                          {s.label}
                          {s.sub && <span className="text-gray-400 text-xs ml-1">({s.sub})</span>}
                        </span>
                        <span className="font-bold" style={{ color: s.color }}>
                          {s.val}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="mt-4 text-sm font-semibold cursor-pointer hover:underline"
                    style={{ color: C.accent, background: "none", border: "none", padding: 0 }}
                  >
                    Manage All Content →
                  </button>
                </SectionCard>

                {/* Activity Log */}
                <SectionCard>
                  <SectionTitle icon={<Zap size={18} />}>Recent Activity</SectionTitle>
                  <div className="space-y-0">
                    {activityLog.map((a, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <div className="flex flex-col items-center" style={{ width: 12 }}>
                          <div
                            className="rounded-full flex-shrink-0"
                            style={{ width: 8, height: 8, background: C.accent, marginTop: 6 }}
                          />
                          {i < activityLog.length - 1 && (
                            <div style={{ width: 2, flex: 1, background: "#E5E7EB", marginTop: 4, marginBottom: 4, borderRadius: 1 }} />
                          )}
                        </div>
                        <div className="pb-4">
                          <p className="text-gray-800 font-medium leading-snug">{a.text}</p>
                          <p className="text-gray-400 text-xs mt-0.5">{a.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionCard>

                {/* Reminders */}
                <SectionCard>
                  <SectionTitle icon={<Calendar size={18} />}>Upcoming Reminders</SectionTitle>
                  <div className="space-y-2">
                    {reminders.map((r, i) => (
                      <div
                        key={i}
                        className="text-sm p-2.5 rounded-md"
                        style={{ borderLeft: `3px solid ${C.accent}`, background: C.light, color: "#1F2937" }}
                      >
                        {r}
                      </div>
                    ))}
                  </div>
                </SectionCard>
              </div>
            </div>

            {/* ──────── Bottom Section ──────── */}

            {/* Policy Update Suggestions */}
            <div
              className="rounded-xl p-6"
              style={{
                background: `linear-gradient(135deg, ${C.light} 0%, #EFF6FF 100%)`,
                border: `1px solid ${C.accent}40`,
              }}
            >
              <SectionTitle emoji="💡">Policy Update Suggestions</SectionTitle>
              <div className="space-y-2 mb-4">
                {suggestions.map((s, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span style={{ color: C.accent, fontWeight: 700, flexShrink: 0 }}>•</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
              <Btn variant="dark">
                <Plus size={15} /> Create Policy Update
              </Btn>
            </div>

            {/* Popular Topics */}
            <SectionCard>
              <SectionTitle emoji="📈">Popular Topics Dashboard</SectionTitle>
              <div className="space-y-4">
                {topics.map((t, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-gray-800">{t.label}</span>
                      <span className="font-bold text-gray-600">{t.pct}%</span>
                    </div>
                    <div className="w-full rounded-full h-3" style={{ background: "#E5E7EB" }}>
                      <div
                        className="h-3 rounded-full transition-all"
                        style={{ width: `${t.pct}%`, background: t.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Help & Resources */}
            <SectionCard>
              <SectionTitle>Help & Resources</SectionTitle>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: <BookOpen size={22} />, label: "Admin User Guide" },
                  { icon: <Video size={22} />, label: "How to Update Policies" },
                  { icon: <Phone size={22} />, label: "Contact IT Support" },
                  { icon: <Mail size={22} />, label: "Submit Content Request" },
                ].map((r, i) => (
                  <button
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg transition-all cursor-pointer"
                    style={{ border: "1px solid #E5E7EB", background: "#fff" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = C.accent;
                      e.currentTarget.style.background = C.light;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E5E7EB";
                      e.currentTarget.style.background = "#fff";
                    }}
                  >
                    <span style={{ color: C.accent }}>{r.icon}</span>
                    <span className="text-xs font-medium text-center text-gray-800">{r.label}</span>
                  </button>
                ))}
              </div>
            </SectionCard>

            {/* bottom padding */}
            <div style={{ height: 24 }} />
          </div>
        </div>
      </div>

      {/* ╔═══════════ RIGHT: Copilot Panel ═══════════╗ */}
      <div
        style={{
          flex: "1",
          background: `linear-gradient(180deg, ${C.light} 0%, #FFFFFF 100%)`,
          borderLeft: "1px solid #E5E7EB",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 32,
        }}
      >
        <div style={{ textAlign: "center", opacity: 0.6 }}>
          <MessageSquare size={48} color={C.accent} style={{ margin: "0 auto 16px" }} />
          <h3 className="text-lg font-bold" style={{ color: C.navy, marginBottom: 8 }}>
            AI Copilot
          </h3>
          <p className="text-sm text-gray-500">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
