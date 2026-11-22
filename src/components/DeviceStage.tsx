export default function DeviceStage() {
  return (
    <div className="device-stage relative mx-auto w-full" aria-hidden="true">
      <div className="device-stage-glow" />

      <div className="device-browser animate-device-1">
        <div className="device-browser-bar">
          <span />
          <span />
          <span />
          <div className="device-browser-url">app.codeandai.com</div>
        </div>
        <div className="device-browser-body">
          <div className="device-ui-row">
            <div className="device-ui-nav" />
            <div className="device-ui-chip" />
          </div>
          <div className="device-ui-hero">
            <div className="device-ui-hero-line" />
            <div className="device-ui-hero-line short" />
          </div>
          <div className="device-ui-grid">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>

      <div className="device-phone device-phone-android animate-device-2">
        <div className="device-phone-notch device-phone-notch-wide" />
        <div className="device-phone-screen">
          <div className="device-app-status" />
          <div className="device-app-title" />
          <div className="device-app-card" />
          <div className="device-app-card short" />
          <div className="device-app-list">
            <i />
            <i />
            <i />
          </div>
          <div className="device-app-dock" />
        </div>
        <p className="device-label">Android</p>
      </div>

      <div className="device-phone device-phone-ios animate-device-3">
        <div className="device-phone-notch" />
        <div className="device-phone-screen device-phone-screen-ios">
          <div className="device-app-status light" />
          <div className="device-app-title light" />
          <div className="device-app-card light" />
          <div className="device-app-card light short" />
          <div className="device-app-list light">
            <i />
            <i />
            <i />
          </div>
          <div className="device-app-dock light" />
        </div>
        <p className="device-label">iPhone</p>
      </div>
    </div>
  );
}
