var blend_ui = {
  navigation: {
    form_inputs: [
      {
        name : 'Text',
        html : '<input type="text" placeholder="text field"/>',
        config : ['long_text','short_text']
      },
      {
        name : 'Textarea',
        html : '<textarea></textarea>',
        config : ['long_text','short_text']

      },
      {
        name : 'Number',
        html : '<input type="number" placeholder="Number"/>'
      },
      {
        name : 'Email',
        html : '<input type="email" placeholder="Email"/>'
      },
      {
        name : 'Date',
        html : '<input type="date"/>'
      },
      {
        name : 'Date Range',
        html : '<input type="range"/>'
      },
      {
        name : 'Phone',
        html : '<input class="phone-input" type="tel"/>'
      },
      {
        name : 'Dollar',
        html : '<input class="currency" type="text"/>'
      },
      {
        name : 'Social Security Number',
        html : '<input class="social-security" type="text" placeholder="Social Security"/>'
      },
      {
        name : 'Address',
        html : '<input class="address" type="text" placeholder="address" />'
      },
      {
        name : 'Multiple Choice Select',
        html : '<select><option selected>Option 1</option><option value="">Option 2</option><option value="">Option 3</option><option value="" >Option 4</option></select>'
      },
      {
        name : 'Multiple Choce Radio',
        html : '<input type="radio"><input type="radio"><input type="radio"><input type="radio">'
      },
      {
        name : 'Checkboxes',
        html : '<input type="checkbox">'
      },
      {
        name : 'Multiple Checkboxes',
        html : '<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">'
      },
      {
        name : 'Autocomple Select',
        html : '<input type="text"/>'
      },
      {
        name : 'Autocomple Input',
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
      },
      {
        name : 'Another type here for saying no/skipping/etc.??',
        html : 'Another type here for saying no/skipping/etc.??'
      }
    ],
    chat_bubbles: [
      {
        name :'Standard format',
        html : '<p> This is a chat bubble</p>'
      },
      {
        name :'with “additional info” text on the bottom',
        html : '<p> This is a chat bubble <input type="text" /></p>'
      },
      {
        name :'Error/alert bubbles',
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
        name : 'Chat bubble link to view document / download',
        html : 'Chat bubble to view doc goes here'
      },
    ],
    progress: [
      {  
        name : 'Application home progress bar',
        html : 'Application home progress bar'
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
        name : 'Splash / Milestone (header + image + subtext)',
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
        name : 'Follow-ups',
        html : 'Follow-ups'
      },
      {  
        name : 'Application sections',
        html : 'Application sections'
      },
      {  
        name : 'Process navigation (lists of things to do within a process)',
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
        name : 'Application completed - stuff to do',
        html : 'Application completed - stuff to do'
      },
      {  
        name : 'Application completed - nothing to do',
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
        name : 'Modals (additional information screens)',
        html : 'Modals (additional information screens)'
      },
      {  
        name : 'Navbar',
        html : 'Navbar'
      },
    ]
  }
}
