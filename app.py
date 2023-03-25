from flask import Flask
from datetime import datetime
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import json
from flask import Flask, jsonify, request
import numpy as np
app = Flask(__name__)

def render_mpl_table(data, col_width=3.0, row_height=0.625, font_size=14,
                     header_color='#40466e', row_colors=['#f1f1f2', 'w'], edge_color='w',
                     bbox=[0, 0, 1, 1], header_columns=0,
                     ax=None, **kwargs):
    if ax is None:
        size = (np.array(data.shape[::-1]) + np.array([0, 1])) * np.array([col_width, row_height])
        fig, ax = plt.subplots(figsize=size)
        ax.axis('off')
    mpl_table = ax.table(cellText=data.values, bbox=bbox, colLabels=data.columns, **kwargs)
    mpl_table.auto_set_font_size(False)
    mpl_table.set_fontsize(font_size)

    for k, cell in mpl_table._cells.items():
        cell.set_edgecolor(edge_color)
        if k[0] == 0 or k[1] < header_columns:
            cell.set_text_props(weight='bold', color='w')
            cell.set_facecolor(header_color)
        else:
            cell.set_facecolor(row_colors[k[0]%len(row_colors) ])
    return ax.get_figure(), ax

@app.route("/csv_upload",methods = ['GET', 'POST'])
def index():
    
    
    req_data = request.get_json()
    with open('output.json', 'w') as outfile:
        json.dump(req_data, outfile)
    with open('output.json', encoding = 'utf-8') as f :
        df = pd.read_json(f)

    #df = pd.read_excel('dataset.xlsx')
    
    
    plt.hist(df['fico'], bins=25, alpha=0.45, color='yellow')
    plt.title("fico")
    plt.legend(['fico'])
    plt.savefig('graphs_and_images/fico.png', dpi=100)

    plt.hist(df['utilization'], bins=25, alpha=0.45, color='blue')
    plt.title("Utilization")
    plt.legend(['Utilization'])
    plt.savefig('graphs_and_images/Utilization.png', dpi=100)
    
    
    plt.hist(df['card_limit'], bins=25, alpha=0.45, color='black')
    plt.title("card_limit")
    plt.legend(['card_limit'])
    plt.savefig('graphs_and_images/card_limit.png', dpi=100)
    
    plt.hist(df['card_interest_rate'], bins=25, alpha=0.45, color='red')
    plt.title("card_interest_rate")
    plt.legend(['card_interest_rate'])
    plt.savefig('graphs_and_images/card_interest_rate.png', dpi=100)
    
    plt.hist(df['monthly_salary'], bins=25, alpha=0.45, color='green')
    plt.title("monthly_salary")
    plt.legend(['monthly_salary'])
    plt.savefig('graphs_and_images/monthly_salary.png', dpi=100)
    
    plt.hist(df['model_target'], bins=25, alpha=0.45, color='red')
    plt.hist(df['model_target'], bins=25, alpha=0.45, color='blue')
    plt.title("model_target")
    plt.legend(['model_target'])
    plt.savefig('graphs_and_images/odel_target.png', dpi=100)

    fig,ax = render_mpl_table(df.head(), header_columns=0, col_width=4.0)
    fig.savefig("graphs_and_images/data_head.png")
    
    fig,ax = render_mpl_table(df.describe(), header_columns=0, col_width=4.0)
    fig.savefig("graphs_and_images/statistical_info.png")

    
    return "Succesfully generated"
 

    
        



if __name__ == "__main__":
    app.debug = True
    app.run()