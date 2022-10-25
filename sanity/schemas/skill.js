export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
   { 
    
    name: "title",
    title: "title",
    description:"Title of the skill",
    type: "string",
  },
  { 
    name: "progress",
    title: "progress",
    type: "number",
    description: "progress of skill from 0 to 100%",
    validation: (Rule) => Rule.min(0).max(100),
  },
  { 
    
    name: "image",
    title: "Image",
    type: "image", 
    options:{
      hotspot:true,
    }  
  },
  ],
}
