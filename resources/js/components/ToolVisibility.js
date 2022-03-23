import React, { useState } from 'react';

function ToolVisibility() {
    const [visible, setVisible] = useState(false);
    // setVisible(!visible);
    return {visible, setVisible};
}
export default ToolVisibility;
