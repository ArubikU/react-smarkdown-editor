var loading = (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#121212", color: "#ffffff" }}>
      <p style={{ fontSize: "1.5em", marginBottom: "10px" }}>Loading the editor...</p>
      <div style={{ display: "flex", gap: "0.5em" }}>
        <span style={{ width: "10px", height: "10px", backgroundColor: "#ffffff", borderRadius: "50%", animation: "bounce 1.5s infinite ease-in-out", animationDelay: "0s" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "#ffffff", borderRadius: "50%", animation: "bounce 1.5s infinite ease-in-out", animationDelay: "0.3s" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "#ffffff", borderRadius: "50%", animation: "bounce 1.5s infinite ease-in-out", animationDelay: "0.6s" }}></span>
      </div>
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )

export default loading