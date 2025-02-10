Developing an Integrated Video Meeting Application with Authentication, WebRTC, and Meeting History
In this project, I developed a comprehensive video meeting application that integrates key features such as user authentication, real-time video communication using WebRTC, and a meeting history feature to enhance the user experience. The app was built using modern web technologies such as React, Material UI, and WebRTC to ensure a seamless, intuitive, and secure environment for users.

URL: https://viewstream-frontend.onrender.com/

Key Features:
#Authentication System with SignIn and SignUp:

SignIn and SignUp Forms: I created a user-friendly authentication page using Material UI to design the SignIn and SignUp forms. These forms allow users to securely log in or create new accounts by entering their email and password.
Context API for Global State Management: To manage user authentication across the app, I implemented Context API, which holds the user’s authentication state globally. This approach ensures the user's logged-in status is accessible throughout the app, making it easier to manage protected routes and provide a seamless user experience.
Authorization Flow: I designed a secure authorization flow, ensuring that users who are not logged in cannot access restricted parts of the app. The app redirects users to the SignIn or SignUp pages when necessary, maintaining both security and user experience.

#WebRTC Integration for Real-Time Video Communication:

STUN Server Configuration: To enable real-time, peer-to-peer video communication even behind firewalls or NAT (Network Address Translation), I integrated a STUN server. This ensures that users can establish a direct connection for audio and video calls, regardless of their network configuration.
Real-Time Video Meet Component: I developed a robust Video Meet Component using WebRTC. This component allows users to participate in video conferences with multiple participants, view video feeds in a grid layout, and interact through live audio and video streams. WebRTC’s peer-to-peer connectivity ensures high-quality communication with minimal latency.
Audio and Video Controls: I implemented essential audio and video controls, such as mute/unmute, camera on/off, device switching, and fullscreen mode. These controls are easy to use and improve the user experience, allowing participants to manage their media settings during calls.

#Custom Meeting UI Designed with CSS:

Responsive and Adaptive Design: Using custom CSS, I built a responsive and adaptive UI that adjusts dynamically to various screen sizes and devices, ensuring a smooth experience on desktops, tablets, and mobile phones. This layout uses a flexbox-based grid system for the video streams and control elements, making sure the user interface adapts to different resolutions.
Video Display and User Interaction: The layout displays participants’ video feeds in a clean and organized manner, adjusting the number of visible streams based on the number of participants. Additionally, the UI provides buttons for managing media controls, such as turning video on/off or adjusting the microphone volume, ensuring users can control their meeting experience with ease.
Intuitive Meeting Toolbar and Chat: I added a meeting toolbar for easy access to controls like screen sharing, chat, and leave meeting. The chat feature allows participants to send messages during the call, making collaboration more effective.

#Meeting History Feature for Tracking Past Sessions:

Storing Meeting Data: I created a feature that stores critical information about each meeting, including participant names, meeting duration, timestamps, and topics discussed. This data is saved using a backend service or local storage, depending on the application setup.
Accessing Meeting History: I designed a dedicated meeting history section within the app where users can easily view and search through their past meetings. The meeting history provides a timeline of previous sessions, allowing users to track what has been discussed and plan follow-up actions.
Search and Filtering: I added a search and filter functionality to allow users to find specific meetings based on keywords, date, or participants. This makes it easier to locate past sessions without manually scrolling through the history.

#User-Friendly Experience:

Simplified Navigation: I designed an intuitive navigation system, allowing users to quickly move between the main landing page, meeting room, and meeting history sections. The Home Component provides clear calls to action, guiding users to either sign in, register, or join a meeting.

Seamless Transitions: Transitions between pages are smooth, and the app automatically saves users’ progress, ensuring they do not lose any data when navigating through the application.
By integrating these features into the application, I was able to build a robust, scalable, and user-friendly video conferencing solution. The authentication system ensures secure access, WebRTC provides high-quality real-time communication, and the meeting history feature allows users to easily track and review their past interactions. This comprehensive set of features offers a secure, intuitive, and professional platform for video conferencing and collaboration.


![viewStream1](https://github.com/user-attachments/assets/00cd9cb4-a7f0-4b8c-80c7-b3690567cda4)
![viewStream2](https://github.com/user-attachments/assets/d9750d69-d501-41dd-8192-a8f16a10f76f)
![viewStream3](https://github.com/user-attachments/assets/8825c3d4-04d6-4ce2-836f-2af239435a50)
