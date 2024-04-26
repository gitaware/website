    hljs.initHighlightingOnLoad();
    hljs.initLineNumbersOnLoad();
    new ClipboardJS('.url');

    function OnClickURL() {
      Swal.fire({
        icon: 'success',
        title: 'Copied!',
        text: 'Copied the URL and title.'
      })
    }
