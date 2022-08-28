import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
  Link,
} from "@mui/material"

import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material"
import { Box } from "@mui/system"
import React, { useState, useEffect } from "react"
import {  Paper } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import FileBase from "react-file-base64"
import { createPost, updatePost } from "../../actions/posts"




const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}))
const CreatePost = () => {
  const [open, setOpen] = useState(false)
  
  const [currentId,setCurrentId] =useState(0)
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    babyName:"",
    year:"",
    location:"",
  })
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  )
  const dispatch = useDispatch()


  useEffect(() => {
    if (post) setPostData(post)
  }, [post])

  const clear = () => {
    setCurrentId(0)
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
      babyName:"",
      year:"",
      location:"",
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (currentId === 0) {
      dispatch(createPost(postData))
      clear()
    }
  }
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="New Recipe"
        sx={{
          position: "fixed",
          bottom: 15,
          left: { xs: "calc(50% - px)", md: 89 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={800}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={6}
         
          borderRadius={5}

        >
          <form
        autoComplete="off"
        noValidate
        
        onSubmit={handleSubmit}
      >
          <Typography variant="h6" color="info" textAlign="center" sx={{ mb: 2  }}>
            Create New Recipe
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Linfeng
            </Typography>
          </UserBox>
          <TextField
          sx={{ width: "100%", mb: 2 }}
          rows={3}
          
          variant="standard"
          name="creator"
          
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
         sx={{ width: "100%", mb: 2  }}
         rows={3}
          name="title"
          variant="standard"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
        sx={{ width: "100%", mb: 2  }}
          name="message"
          variant="standard"
          label="Message"
          fullWidth
          multiline
          rows={3}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
           <TextField
        sx={{ width: "100%", mb: 2  }}
          name="year"
          variant="standard"
          label="How old is the baby(age in years)"
          fullWidth
          
          rows={4}
          value={postData.year}
          onChange={(e) =>
            setPostData({ ...postData, year: e.target.value })
          }
        />
           <TextField
        sx={{ width: "100%", mb: 2  }}
          name="babyName"
          variant="standard"
          label="BabyName(Optional)"
          fullWidth
          
          rows={4}
          value={postData.babyName}
          onChange={(e) =>
            setPostData({ ...postData, babyName: e.target.value })
          }
        />
           <TextField
        sx={{ width: "100%", mb: 2  }}
          name="location"
          variant="standard"
          label="Location (Please Enter City Name?)"
          fullWidth
          
          rows={4}
          value={postData.location}
          onChange={(e) =>
            setPostData({ ...postData, location: e.target.value })
          }
        />
        <TextField
        sx={{ width: "100%", mb: 2  }}
          name="tags"
          variant="standard"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
          />
          
         
           
          <Stack direction="row" gap={1} mt={2} mb={3}>
          
            <Image color="secondary" ></Image>
            <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth>
              Post
            </Button>
            <Button sx={{ width: "100px" }}
            
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth>
              
            Clear
            </Button>
          </ButtonGroup>
          </form>
        </Box>
      </SytledModal>
    </>
  )
}

export default CreatePost
