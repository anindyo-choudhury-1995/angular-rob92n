import { Component } from '@angular/core';
export interface ISection {
    srNumber: string;
    taskType: string;
    deliveryType: string;
    time: number;
    note: string;
}

export interface IListItems {
    value: string;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  stage = 0;

    minDate = new Date("07 Dec 2019");

    maxDate = new Date("13 Dec 2019");

    newDate = new Date();

    selectedSR = null;

    dayTrackers = [
        {
            time: "0.00",
            day: "S",
            id: 1,
            selected: false
        },
        {
            time: "0.00",
            day: "S",
            id: 2,
            selected: false
        },
        {
            time: "8.00",
            day: "M",
            id: 3,
            selected: false
        },
        {
            time: "2.15",
            day: "T",
            id: 4,
            selected: true
        },
        {
            time: "0.0",
            day: "W",
            id: 5,
            selected: false
        },
        {
            time: "0.0",
            day: "T",
            id: 6,
            selected: false
        },
        {
            time: "0.0",
            day: "F",
            id: 7,
            selected: false
        }
    ];

    listItems: ISection[] = [
        {
            srNumber: "Customer Workshop or Cloud Day",
            taskType: "Training/Personal Development - Taken",
            deliveryType: "Face To Face",
            time: 1,
            note:
                "Customer Workshop or Cloud Day Training/Personal Development - Taken Face To Face"
        },
        {
            srNumber:
                "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
            taskType: "Corporate Citizenship",
            deliveryType: "Remote",
            time: 2,
            note: ""
        },
        {
            srNumber:
                "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
            taskType: "Follow-up",
            deliveryType: "Face to Face",
            time: 1,
            note: ""
        },
        {
            srNumber: "Non Service",
            taskType: "Time Off",
            deliveryType: "",
            time: 1,
            note: ""
        }
    ];

    selectedSRNumber = "";
    selectedTaskType = "";
    selectedDeliveryType = "";
    timeValue = 0;
    noteValue = "";

    sRNumbers: IListItems[] = [
        { value: "Customer Workshop or Cloud Day" },
        {
            value:
                "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)"
        },
        {
            value:
                "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)"
        },
        { value: "Non Service" }
    ];

    taskTypes: IListItems[] = [
        { value: "Training/Personal Development - Taken" },
        { value: "Corporate Citizenship" },
        { value: "Follow-up" }
    ];

    deliveryTypes: IListItems[] = [
        { value: "Remote" },
        { value: "Face To Face" }
    ];
    cardIndexSelected: any;

    constructor() {}

    takeToStage(id, itemIndex = null) {
        this.stage = id;
        if (this.stage === -1) {
            if (this.cardIndexSelected != null) {
                this.listItems.splice(this.cardIndexSelected, 1);
            }
        }
        if (this.stage === 0) {
            this.selectedSRNumber = "";
            this.selectedTaskType = "";
            this.selectedDeliveryType = "";
            this.timeValue = 0;
            this.noteValue = "";
        }
        if (this.stage === 1) {
            this.cardIndexSelected = itemIndex >= 0 ? itemIndex : null;
            this.selectedSRNumber = this.listItems[itemIndex].srNumber;
            this.selectedTaskType = this.listItems[itemIndex].taskType;
            this.selectedDeliveryType = this.listItems[itemIndex].deliveryType;
            this.timeValue = this.listItems[itemIndex].time;
            this.noteValue = this.listItems[itemIndex].note;
        }
        if (this.stage === 2) {
            this.cardIndexSelected = itemIndex >= 0 ? itemIndex : null;
            this.selectedSRNumber = "";
            this.selectedTaskType = "";
            this.selectedDeliveryType = "";
            this.timeValue = 0;
            this.noteValue = "";
        }
        if (this.stage === 3) {
            if (this.cardIndexSelected !== null) {
                this.listItems.splice(this.cardIndexSelected, 1, {
                    srNumber: this.selectedSRNumber,
                    taskType: this.selectedTaskType,
                    deliveryType:
                        this.selectedTaskType === "Time Off"
                            ? ""
                            : this.selectedDeliveryType,
                    time: this.timeValue,
                    note: this.noteValue
                });
            } else {
                this.listItems.push({
                    srNumber: this.selectedSRNumber,
                    taskType: this.selectedTaskType,
                    deliveryType:
                        this.selectedTaskType === "Time Off"
                            ? ""
                            : this.selectedDeliveryType,
                    time: this.timeValue,
                    note: this.noteValue
                });
            }
            this.selectedSRNumber = "";
            this.selectedTaskType = "";
            this.selectedDeliveryType = "";
            this.timeValue = 0;
            this.noteValue = "";
        }
    }

    selectDayById(dayId) {
        this.dayTrackers.forEach(dayObj => {
            dayObj.selected = dayObj.id === dayId ? true : false;
        });
    }

      changeListItems(id) {
    if (id === 0) {
      this.listItems = [
        {
          srNumber: "Customer Workshop or Cloud Day",
          taskType: "Training/Personal Development - Taken",
          deliveryType: "Face To Face",
          time: 1,
          note:
            "Customer Workshop or Cloud Day Training/Personal Development - Taken Face To Face"
        },
        {
          srNumber:
            "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
          taskType: "Corporate Citizenship",
          deliveryType: "Remote",
          time: 2,
          note: ""
        },
        {
          srNumber:
            "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
          taskType: "Follow-up",
          deliveryType: "Face to Face",
          time: 1,
          note: ""
        }
      ];
    } else if (id === 1) {
      this.listItems = [
        {
          srNumber: "Customer Workshop or Cloud Day",
          taskType: "Training/Personal Development - Taken",
          deliveryType: "Face To Face",
          time: 1,
          note:
            "Customer Workshop or Cloud Day Training/Personal Development - Taken Face To Face"
        },
        {
          srNumber: "Non Service",
          taskType: "Time Off",
          deliveryType: "",
          time: 1,
          note: ""
        }
      ];
    } else if (id === 2) {
      this.listItems = [
        {
          srNumber:
            "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
          taskType: "Corporate Citizenship",
          deliveryType: "Remote",
          time: 2,
          note: ""
        },
        {
          srNumber:
            "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
          taskType: "Follow-up",
          deliveryType: "Face to Face",
          time: 1,
          note: ""
        },
        {
          srNumber: "Non Service",
          taskType: "Time Off",
          deliveryType: "",
          time: 1,
          note: ""
        }
      ];
    } else if (id === 3) {
      this.listItems = [
        {
          srNumber: "Customer Workshop or Cloud Day",
          taskType: "Training/Personal Development - Taken",
          deliveryType: "Face To Face",
          time: 1,
          note:
            "Customer Workshop or Cloud Day Training/Personal Development - Taken Face To Face"
        },
        {
          srNumber:
            "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
          taskType: "Follow-up",
          deliveryType: "Face to Face",
          time: 1,
          note: ""
        },
        {
          srNumber: "Non Service",
          taskType: "Time Off",
          deliveryType: "",
          time: 1,
          note: ""
        }
      ];
    } else if (id === 4) {
      this.listItems = [
        {
          srNumber: "Customer Workshop or Cloud Day",
          taskType: "Training/Personal Development - Taken",
          deliveryType: "Face To Face",
          time: 1,
          note:
            "Customer Workshop or Cloud Day Training/Personal Development - Taken Face To Face"
        },
        {
          srNumber:
            "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
          taskType: "Corporate Citizenship",
          deliveryType: "Remote",
          time: 2,
          note: ""
        },
        {
          srNumber:
            "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
          taskType: "Follow-up",
          deliveryType: "Face to Face",
          time: 1,
          note: ""
        },
        {
          srNumber: "Non Service",
          taskType: "Time Off",
          deliveryType: "",
          time: 1,
          note: ""
        }
      ];
    } else if (id === 5) {
      this.listItems = [
        {
          srNumber: "Customer Workshop or Cloud Day",
          taskType: "Training/Personal Development - Taken",
          deliveryType: "Face To Face",
          time: 1,
          note:
            "Customer Workshop or Cloud Day Training/Personal Development - Taken Face To Face"
        },
        {
          srNumber:
            "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
          taskType: "Corporate Citizenship",
          deliveryType: "Remote",
          time: 2,
          note: ""
        },
        {
          srNumber:
            "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
          taskType: "Follow-up",
          deliveryType: "Face to Face",
          time: 1,
          note: ""
        }
      ];
    } else if (id === 6) {
      this.listItems = [
        {
          srNumber: "Customer Workshop or Cloud Day",
          taskType: "Training/Personal Development - Taken",
          deliveryType: "Face To Face",
          time: 1,
          note:
            "Customer Workshop or Cloud Day Training/Personal Development - Taken Face To Face"
        },
        {
          srNumber:
            "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
          taskType: "Follow-up",
          deliveryType: "Face to Face",
          time: 1,
          note: ""
        },
        {
          srNumber: "Non Service",
          taskType: "Time Off",
          deliveryType: "",
          time: 1,
          note: ""
        }
      ];
    } else if (id === 7) {
      this.listItems = [
        
        {
          srNumber:
            "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
          taskType: "Corporate Citizenship",
          deliveryType: "Remote",
          time: 2,
          note: ""
        },
                {
          srNumber: "Non Service",
          taskType: "Time Off",
          deliveryType: "",
          time: 1,
          note: ""
        },
        {
          srNumber:
            "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
          taskType: "Follow-up",
          deliveryType: "Face to Face",
          time: 1,
          note: ""
        },

        {
          srNumber: "Customer Workshop or Cloud Day",
          taskType: "Training/Personal Development - Taken",
          deliveryType: "Face To Face",
          time: 1,
          note:
            "Customer Workshop or Cloud Day Training/Personal Development - Taken Face To Face"
        }
      ];
    }
  }
}
