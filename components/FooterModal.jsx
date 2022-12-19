const FooterModel = (props) => {
  let { title, isOpen, onClose } = props;
  return (
    <>
      {isOpen && (
        <div
          class={isOpen ? "modal fade show" : "modal fade"}
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{
            display: isOpen ? "block" : "none",
          }}
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {title}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={onClose}
                ></button>
              </div>
              <div class="modal-body">{props.children}</div>
              <div class="modal-footer">
                {/* <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterModel;
