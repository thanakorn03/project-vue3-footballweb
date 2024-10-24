<template>
    <footer class="custom-footer">
      <div class="footer-content">
        <div class="left-section">
          <img src="@/assets/logo.png" alt="Soccer Icon" class="footer-icon" />
          <div class="contact-info">
            <p>Clyde.Haeney30@yahoo.com</p>
            <p>2066 Aiden Brooks, Swifttown 22881</p>
          </div>
        </div>
        <div class="right-section">
          <a href="https://www.facebook.com" target="_blank">
            <img src="@/assets/01.png" alt="Facebook" class="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="@/assets/02.webp" alt="Instagram" class="social-icon" />
          </a>
          <a href="https://www.google.com" target="_blank">
            <img src="@/assets/03.png" alt="Google" class="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src="@/assets/04.webp" alt="YouTube" class="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "CustomFooter",
  };
  </script>
  
  <style scoped>
  .custom-footer {
    background-color: #000;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 5px solid #0044cc; /* สีของขอบด้านบน */
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .left-section {
    display: flex;
    align-items: center;
  }
  
  .footer-icon {
    width: 50px;
    margin-right: 10px;
  }
  
  .contact-info p {
    margin: 0;
  }
  
  .right-section {
    display: flex;
    gap: 10px;
  }
  
  .social-icon {
    width: 30px;
    transition: transform 0.3s;
  }
  
  .social-icon:hover {
    transform: scale(1.1);
  }
  </style>
  