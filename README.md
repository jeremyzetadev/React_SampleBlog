## Fix page-interaction-history: 
### useHistory is depcrecated use useNavigate(but currently dont have .push('/pagename'))

## At axios branch
Use this reference for fetch or axios
### [fetch] needs to make the response from json to obj<cr>
const response = await fetch(`API_URL`); <cr>
const data = await response.json();<cr>
### [axios] is already an object<cr>
const data = await axios.get(`API_URL`);
![image](https://github.com/user-attachments/assets/40379619-fea8-468d-bcb9-27def14cc941)
