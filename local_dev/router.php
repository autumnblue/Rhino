<?php
    // https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory

    if (file_exists($_SERVER["DOCUMENT_ROOT"] . $_SERVER["REQUEST_URI"])) {
        return false;
    } else {
        require "index.html";
    }
?>