var blend_ui = {
  navigation: {
    form_inputs: [
      {
        name : 'Text',
        
        //config : ['long_text','short_text']
      },
      {
        name : 'Textarea',
        html : '<textarea class="blend-textarea" ></textarea>',
        //config : ['long_text','short_text']

      },
      {
        name : 'Number',
        html : '<input type="number" class="blend-input" placeholder="Number"/>'
      },
      // {
      //   name : 'Email',
      //   html : '<input type="email" class="blend-input" placeholder="Email"/>'
      // },
      {
        name : 'Date',
        html : '<input type="date" class="blend-input"/>'
      },
      // {
      //   name : 'Date Range',
      //   html : '<input type="range" class="blend-input"/>'
      // },
      // {
      //   name : 'Phone',
      //   html : '<input class="phone-input" class="blend-input" type="tel"/>'
      // },
      {
        name : 'Dollar',
        html : '<input class="currency blend-input"  type="text"/>'
      },
      {
        name : 'Social Security Number',
        html : '<input class="social-security blend-input" type="text" placeholder="Social Security"/>'
      },
      {
        name : 'Address',
        html : '<input class="address blend-input"  type="text" placeholder="address" />'
      },
      {
        name : 'Multiple Choice Select',
        html : '<select><option selected>Option 1</option><option value="">Option 2</option><option value="">Option 3</option><option value="" >Option 4</option></select>'
      },
      {
        name : 'Multiple Choice Radio',
        html : '<input type="radio"><input type="radio"><input type="radio"><input type="radio">'
      },
      // {
      //   name : 'Checkboxes',
      //   html : '<input type="checkbox">'
      // },
      // {
      //   name : 'Multiple Checkboxes',
      //   html : '<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">'
      // },
      {
        name : 'Autocomplete Select',
        html : '<input type="text"/>'
      },
      {
        name : 'Autocomplete Input',
        html : '<input type="text"/><select><option selected>Option 1</option><option value="">Option 2</option><option value="">Option 3</option><option value="" >Option 4</option></select>'
      },
      {
        name : 'Toggle',
        html : 'Toggle button goes here'
      },
      {
        name : 'Select Institution',
        html : 'Select Institution goes here'
      }
    ],
    buttons: [
      {
        name : 'Single Button',
        html : '<button>Im a button</button>'
      },
      {
        name : 'Multiple Buttons',
        html : '<button>Im a button</button><button>Im a button</button><button>Im a button</button>'
      },
      {
        name : 'Secondary Submission Button',
        html : '<button>Secondary Submission Button</button>'
      }
    ],
    chat_bubbles: [
      {
        name :'Standard format',
        html : '<p> This is a chat bubble</p>'
      },
      {
        name :'Additional Info',
        html : '<p> This is a chat bubble <input type="text" /></p>'
      },
      {
        name :'Error alert',
        html : '<p class="error"> This is a chat bubble with an error</p>'
      }
    ],
    doc_upload: [
      {  
        name : 'Doc upload button',
        html : 'Doc upload goes here'
      },
      {  
        name : 'Remove document',
        html : 'Remove document goes here'
      },
      {  
        name : 'View Document',
        html : 'Chat bubble to view doc goes here'
      },
    ],
    progress: [
      {  
        name : 'Home progress bar',
        html : 'Home progress bar'
      },
      {  
        name : 'Doc upload progress bar',
        html : 'Doc upload progress bar'
      },
      {  
        name : 'PDF conversion upload',
        html : 'PDF conversion upload'
      },
      {  
        name : 'Async task progress',
        html : 'Async task progress'
      },
    ],
    graphics: [
      {  
        name : 'Illustrations',
        html : 'Illustrations'
      },
      {  
        name : 'Icons',
        html : 'Icons'
      },
      {  
        name : 'GIFs',
        html : 'GIFs'
      },
    ],
    task_screens: [
      {  
        name : 'Splash Milestone',
        html : 'Splash / Milestone (header + image + subtext)'
      },
      {  
        name : 'Start of process',
        html : 'Start of process'
      },
      {  
        name : 'Pick up where you left off',
        html : 'Pick up where you left off'
      },
      {  
        name : 'Process completed',
        html : 'Process completed'
      },
    ],
    list_types: [
      {  
        name : 'Follow ups',
        html : 'Follow-ups'
      },
      {  
        name : 'Application sections',
        html : 'Application sections'
      },
      {  
        name : 'Process navigation',
        html : 'Process navigation (lists of things to do within a process)'
      },
    ],
    splash_screens: [
      {  
        name : 'Welcome',
        html : 'Welcome Screen'
      },
      {  
        name : 'Welcome back',
        html : 'Welcome back screen'
      },
      {  
        name : 'Application completed with more',
        html : 'Application completed - stuff to do'
      },
      {  
        name : 'Application completed',
        html : 'Application completed - nothing to do'
      },
      {  
        name : 'Closure warning',
        html : 'Closure warning'
      },
      {  
        name : 'Archived',
        html : 'Archived'
      },
    ],
    misc: [
      {  
        name : 'Benefits Card',
        html : 'Benefits Card'
      },
      {  
        name : 'Popover',
        html : 'Popover'
      },
      {  
        name : 'Tooltip',
        html : 'Tooltip'
      },
      {  
        name : 'Modals',
        html : 'Modals (additional information screens)'
      },
      {  
        name : 'Navbar',
        html : 'Navbar'
      },
    ]
  }
}
