import PropTypes from "prop-types";
import DeviceContext from "./DeviceContext";
import { useState } from "react";

const DeviceProvider = ({ children }) => {
  const siteName = "FaisaCafe";
  const [darkTheme, setDarkTheme] = useState(false);
  /**
   * Height of header and footer
   * header -> 80 Px
   * footer -> 770
   */
  const totalSkipHeight = 80 + 270;
  const minHeight =
    window.innerHeight > totalSkipHeight
      ? window.innerHeight - totalSkipHeight
      : "";

  const DeviceContextValue = { minHeight, siteName, darkTheme, setDarkTheme };

  return (
    <>
      <DeviceContext.Provider value={DeviceContextValue}>
        {children}
      </DeviceContext.Provider>
    </>
  );
};

DeviceProvider.propTypes = { children: PropTypes.object };

export default DeviceProvider;
